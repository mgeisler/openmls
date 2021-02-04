use super::*;
use crate::schedule::psk::*;

/// Test the encoding for PreSharedKeyProposal, that also covers some of the
/// other PSK-related structs
#[test]
fn test_pre_shared_key_proposal_codec() {
    // ReInit
    let orig = PreSharedKeyProposal {
        psk: PreSharedKeyID {
            psk_type: PSKType::Reinit,
            psk: Psk::Reinit(ReinitPsk {
                psk_group_id: vec![4, 5, 6],
                psk_epoch: 1234,
            }),
            psk_nonce: vec![1, 2, 3],
        },
    };
    let encoded = orig.encode_detached().unwrap();
    let decoded = PreSharedKeyProposal::decode_detached(&encoded).unwrap();
    assert_eq!(decoded, orig);

    // External
    let orig = PreSharedKeyProposal {
        psk: PreSharedKeyID {
            psk_type: PSKType::External,
            psk: Psk::External(ExternalPsk {
                psk_id: vec![4, 5, 6],
            }),
            psk_nonce: vec![1, 2, 3],
        },
    };
    let encoded = orig.encode_detached().unwrap();
    let decoded = PreSharedKeyProposal::decode_detached(&encoded).unwrap();
    assert_eq!(decoded, orig);

    // Branch
    let orig = PreSharedKeyProposal {
        psk: PreSharedKeyID {
            psk_type: PSKType::Branch,
            psk: Psk::Branch(BranchPsk {
                psk_group_id: vec![4, 5, 6],
                psk_epoch: 1234,
            }),
            psk_nonce: vec![1, 2, 3],
        },
    };
    let encoded = orig.encode_detached().unwrap();
    let decoded = PreSharedKeyProposal::decode_detached(&encoded).unwrap();
    assert_eq!(decoded, orig);
}
/// Test the encoding for ReInitProposal, that also covers some of the
/// other PSK-related structs
#[test]
fn test_reinit_proposal_codec() {
    for ciphersuite_name in Config::supported_ciphersuite_names() {
        let orig = ReInitProposal {
            group_id: GroupId::random(),
            version: ProtocolVersion::default(),
            ciphersuite: *ciphersuite_name,
            extensions: vec![],
        };
        let encoded = orig.encode_detached().unwrap();
        let decoded = ReInitProposal::decode_detached(&encoded).unwrap();
        assert_eq!(decoded, orig);
    }
}