initSidebarItems({"enum":[["CredentialError",""],["EmptyInputError",""],["InnerState","`Enum` that indicates whether the inner group state has been modified since the last time it was persisted. `InnerState::Changed` indicates that the state has changed and that [`.save()`] should be called. `InnerState::Persisted` indicates that the state has not been modified and therefore doesn’t need to be persisted."],["InvalidMessageError",""],["MlsCiphertextError",""],["MlsGroupError",""],["MlsPlaintextError",""],["Psk","PSK enum that can contain the different PSK types"],["PskType","Type of PSK."],["ValidationError",""],["VerificationError",""]],"struct":[["BranchPsk","Branch PSK"],["ExternalPsk","External PSK."],["MlsGroup","A `MlsGroup` represents an [CoreGroup] with an easier, high-level API designed to be used in production. The API exposes high level functions to manage a group by adding/removing members, get the current member list, etc."],["MlsGroupConfig","Specifies the configuration parameters for a [`MlsGroup`]"],["PreSharedKeyId","A `PreSharedKeyID` is used to uniquely identify the PSKs that get injected in the key schedule."],["PreSharedKeys","`PreSharedKeys` is a vector of `PreSharedKeyID`s. struct { PreSharedKeyID psks<0..2^16-1>; } PreSharedKeys;"],["ProposalStore","A [ProposalStore] can store the standalone proposals that are received from the DS in between two commit messages."],["PskBundle","Contains the secret part of the PSK as well as the public part that is used as a marker for injection into the key schedule."],["ReinitPsk","ReInit PSK."],["Sender",""],["SenderRatchetConfiguration","Stores the configuration parameters for sender ratchets."],["StagedProposal","Alternative representation of a Proposal, where the sender is extracted from the encapsulating MlsPlaintext and the ProposalReference is attached."]],"trait":[["TlsDeserializeTrait","The `Deserialize` trait defines functions to deserialize a byte slice to a struct or enum."],["TlsSerializeTrait","The `Serialize` trait provides functions to serialize a struct or enum."],["TlsSizeTrait","The `Size` trait needs to be implemented by any struct that should be efficiently serialized. This allows to collect the length of a serialized structure before allocating memory."]],"type":[["LeafIndex",""]]});