// #[macro_use]
// extern crate clap;
// use clap::App;

use std::io::{stdin, stdout, StdoutLock, Write};
use termion::input::TermRead;

mod backend;
mod conversation;
mod identity;
mod networking;
mod user;

const HELP: &str = "
>>> Available commands:
>>>     - update                                update the client state
>>>     - reset                                 reset the server
>>>     - register {client name}                register a new client
>>>     - create group {group name}             create a new group
>>>     - group {group name}                    group operations
>>>         - send {message}                    send message to group
>>>         - invite {client name}              invite a user to the group
>>>         - read                              read messages sent to the group (max 100)
>>>         - update                            update the client state

";

fn update(client: &mut user::User, group_id: Option<String>, stdout: &mut StdoutLock) {
    let messages = client.update(group_id).unwrap();
    stdout.write_all(b" >>> Updated client :)\n").unwrap();
    if !messages.is_empty() {
        stdout.write_all(b"     New messages:\n\n").unwrap();
    }
    messages.iter().for_each(|m| {
        stdout
            .write_all(format!("         {m}\n").as_bytes())
            .unwrap();
    });
    stdout.write_all(b"\n").unwrap();
}

fn main() {
    pretty_env_logger::init();

    let stdout = stdout();
    let mut stdout = stdout.lock();
    let stdin = stdin();
    let mut stdin = stdin.lock();

    stdout
        .write_all(b" >>> Welcome to the OpenMLS CLI :)\nType help to get a list of commands\n\n")
        .unwrap();
    let mut client = None;

    loop {
        stdout.flush().unwrap();
        let op = stdin.read_line().unwrap().unwrap();

        // Register a client.
        // There's no persistence. So once the client app stops you have to
        // register a new client.
        if let Some(client_name) = op.strip_prefix("register ") {
            client = Some(user::User::new(client_name.to_string()));
            stdout
                .write_all(format!("registered new client {client_name}\n\n").as_bytes())
                .unwrap();
            continue;
        }

        // Create a new group.
        if let Some(group_name) = op.strip_prefix("create group ") {
            if let Some(client) = &mut client {
                client.create_group(group_name.to_string());
                stdout
                    .write_all(format!(" >>> Created group {group_name} :)\n\n").as_bytes())
                    .unwrap();
            } else {
                stdout
                    .write_all(b" >>> No client to create a group :(\n\n")
                    .unwrap();
            }
            continue;
        }

        // Group operations.
        if let Some(group_name) = op.strip_prefix("group ") {
            if let Some(client) = &mut client {
                loop {
                    stdout.write_all(b" > ").unwrap();
                    stdout.flush().unwrap();
                    let op2 = stdin.read_line().unwrap().unwrap();

                    // Send a message to the group.
                    if let Some(msg) = op2.strip_prefix("send ") {
                        client.send_msg(msg, group_name.to_string()).unwrap();
                        stdout
                            .write_all(format!("sent message to {group_name}\n\n").as_bytes())
                            .unwrap();
                        continue;
                    }

                    // Invite a client to the group.
                    if let Some(new_client) = op2.strip_prefix("invite ") {
                        client
                            .invite(new_client.to_string(), group_name.to_string())
                            .unwrap();
                        stdout
                            .write_all(
                                format!("added {new_client} to group {group_name}\n\n").as_bytes(),
                            )
                            .unwrap();
                        continue;
                    }

                    // Read messages sent to the group.
                    if op2 == "read" {
                        let messages = client.read_msgs(group_name.to_string()).unwrap();
                        if let Some(messages) = messages {
                            stdout
                                .write_all(
                                    format!(
                                        "{} has received {} messages\n\n",
                                        group_name,
                                        messages.len()
                                    )
                                    .as_bytes(),
                                )
                                .unwrap();
                        } else {
                            stdout
                                .write_all(format!("{group_name} has no messages\n\n").as_bytes())
                                .unwrap();
                        }
                        continue;
                    }

                    // Update the client state.
                    if op2 == "update" {
                        update(client, Some(group_name.to_string()), &mut stdout);
                        continue;
                    }

                    // Exit group.
                    if op2 == "exit" {
                        stdout.write_all(b" >>> Leaving group \n\n").unwrap();
                        break;
                    }

                    stdout
                        .write_all(b" >>> Unknown group command :(\n\n")
                        .unwrap();
                }
            } else {
                stdout.write_all(b" >>> No client :(\n\n").unwrap();
            }
            continue;
        }

        // Update the client state.
        if op == "update" {
            if let Some(client) = &mut client {
                update(client, None, &mut stdout);
            } else {
                stdout
                    .write_all(b" >>> No client to update :(\n\n")
                    .unwrap();
            }
            continue;
        }

        // Reset the server and client.
        if op == "reset" {
            backend::Backend::default().reset_server();
            client = None;
            stdout.write_all(b" >>> Reset server :)\n\n").unwrap();
            continue;
        }

        // Print help
        if op == "help" {
            stdout.write_all(HELP.as_bytes()).unwrap();
            continue;
        }

        stdout
            .write_all(b" >>> unknown command :(\n >>> try help\n\n")
            .unwrap();
    }
}

#[test]
#[ignore]
fn basic_test() {
    // Reset the server before doing anything for testing.
    backend::Backend::default().reset_server();

    const MESSAGE_1: &str = "Thanks for adding me Client1.";
    const MESSAGE_2: &str = "Welcome Client3.";
    const MESSAGE_3: &str = "Thanks so much for the warm welcome! 😊";

    // Create one client
    let mut client_1 = user::User::new("Client1".to_string());

    // Create another client
    let mut client_2 = user::User::new("Client2".to_string());

    // Create another client
    let mut client_3 = user::User::new("Client3".to_string());

    // Update the clients to know about the other clients.
    client_1.update(None).unwrap();
    client_2.update(None).unwrap();
    client_3.update(None).unwrap();

    // Client 1 creates a group.
    client_1.create_group("MLS Discussions".to_string());

    // Client 1 adds Client 2 to the group.
    client_1
        .invite("Client2".to_string(), "MLS Discussions".to_string())
        .unwrap();

    // Client 2 retrieves messages.
    client_2.update(None).unwrap();

    // Client 2 sends a message.
    client_2
        .send_msg(MESSAGE_1, "MLS Discussions".to_string())
        .unwrap();

    // Client 1 retrieves messages.
    client_1.update(None).unwrap();

    // Check that Client 1 received the message
    assert_eq!(
        client_1.read_msgs("MLS Discussions".to_string()).unwrap(),
        Some(vec![MESSAGE_1.into()])
    );

    // Client 2 adds Client 3 to the group.
    client_2
        .invite("Client3".to_string(), "MLS Discussions".to_string())
        .unwrap();

    // Everyone updates.
    client_1.update(None).unwrap();
    client_2.update(None).unwrap();
    client_3.update(None).unwrap();

    // Client 1 sends a message.
    client_1
        .send_msg(MESSAGE_2, "MLS Discussions".to_string())
        .unwrap();

    // Everyone updates.
    client_1.update(None).unwrap();
    client_2.update(None).unwrap();
    client_3.update(None).unwrap();

    // Check that Client 2 and Client 3 received the message
    assert_eq!(
        client_2.read_msgs("MLS Discussions".to_string()).unwrap(),
        Some(vec![MESSAGE_2.into()])
    );
    assert_eq!(
        client_3.read_msgs("MLS Discussions".to_string()).unwrap(),
        Some(vec![MESSAGE_2.into()])
    );

    // Client 3 sends a message.
    client_3
        .send_msg(MESSAGE_3, "MLS Discussions".to_string())
        .unwrap();

    // Everyone updates.
    client_1.update(None).unwrap();
    client_2.update(None).unwrap();
    client_3.update(None).unwrap();

    // Check that Client 1 and Client 2 received the message
    assert_eq!(
        client_1.read_msgs("MLS Discussions".to_string()).unwrap(),
        Some(vec![MESSAGE_1.into(), MESSAGE_3.into()])
    );
    assert_eq!(
        client_2.read_msgs("MLS Discussions".to_string()).unwrap(),
        Some(vec![MESSAGE_2.into(), MESSAGE_3.into()])
    );
}
