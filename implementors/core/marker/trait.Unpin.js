(function() {var implementors = {};
implementors["openmls"] = [{"text":"impl Unpin for HpkeCiphertext","synthetic":true,"types":[]},{"text":"impl Unpin for Secret","synthetic":true,"types":[]},{"text":"impl Unpin for AeadKey","synthetic":true,"types":[]},{"text":"impl Unpin for ReuseGuard","synthetic":true,"types":[]},{"text":"impl Unpin for AeadNonce","synthetic":true,"types":[]},{"text":"impl Unpin for Signature","synthetic":true,"types":[]},{"text":"impl Unpin for SignaturePrivateKey","synthetic":true,"types":[]},{"text":"impl Unpin for SignaturePublicKey","synthetic":true,"types":[]},{"text":"impl Unpin for SignatureKeypair","synthetic":true,"types":[]},{"text":"impl Unpin for Ciphersuite","synthetic":true,"types":[]},{"text":"impl Unpin for CiphersuiteName","synthetic":true,"types":[]},{"text":"impl Unpin for HKDFError","synthetic":true,"types":[]},{"text":"impl Unpin for AEADError","synthetic":true,"types":[]},{"text":"impl Unpin for Cursor","synthetic":true,"types":[]},{"text":"impl Unpin for CodecError","synthetic":true,"types":[]},{"text":"impl Unpin for VecSize","synthetic":true,"types":[]},{"text":"impl Unpin for CONFIG","synthetic":true,"types":[]},{"text":"impl Unpin for PersistentConfig","synthetic":true,"types":[]},{"text":"impl Unpin for Config","synthetic":true,"types":[]},{"text":"impl Unpin for ProtocolVersion","synthetic":true,"types":[]},{"text":"impl Unpin for Certificate","synthetic":true,"types":[]},{"text":"impl Unpin for Credential","synthetic":true,"types":[]},{"text":"impl Unpin for BasicCredential","synthetic":true,"types":[]},{"text":"impl Unpin for CredentialBundle","synthetic":true,"types":[]},{"text":"impl Unpin for CredentialError","synthetic":true,"types":[]},{"text":"impl Unpin for CredentialType","synthetic":true,"types":[]},{"text":"impl Unpin for MLSCredentialType","synthetic":true,"types":[]},{"text":"impl Unpin for ConfigError","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for ExtensionStruct","synthetic":true,"types":[]},{"text":"impl Unpin for ExtensionError","synthetic":true,"types":[]},{"text":"impl Unpin for ExtensionType","synthetic":true,"types":[]},{"text":"impl Unpin for CapabilitiesExtension","synthetic":true,"types":[]},{"text":"impl Unpin for KeyIDExtension","synthetic":true,"types":[]},{"text":"impl Unpin for LifetimeExtension","synthetic":true,"types":[]},{"text":"impl Unpin for ParentHashExtension","synthetic":true,"types":[]},{"text":"impl Unpin for RatchetTreeExtension","synthetic":true,"types":[]},{"text":"impl Unpin for MLSPlaintext","synthetic":true,"types":[]},{"text":"impl Unpin for MLSCiphertext","synthetic":true,"types":[]},{"text":"impl Unpin for MLSPlaintextTBS","synthetic":true,"types":[]},{"text":"impl Unpin for MLSSenderData","synthetic":true,"types":[]},{"text":"impl Unpin for MLSCiphertextSenderDataAAD","synthetic":true,"types":[]},{"text":"impl Unpin for MLSCiphertextContent","synthetic":true,"types":[]},{"text":"impl Unpin for MLSCiphertextContentAAD","synthetic":true,"types":[]},{"text":"impl Unpin for MLSPlaintextCommitContent","synthetic":true,"types":[]},{"text":"impl Unpin for MLSPlaintextCommitAuthData","synthetic":true,"types":[]},{"text":"impl Unpin for MLSPlaintextError","synthetic":true,"types":[]},{"text":"impl Unpin for MLSCiphertextError","synthetic":true,"types":[]},{"text":"impl Unpin for ContentType","synthetic":true,"types":[]},{"text":"impl Unpin for MLSPlaintextContentType","synthetic":true,"types":[]},{"text":"impl Unpin for Sender","synthetic":true,"types":[]},{"text":"impl Unpin for SenderType","synthetic":true,"types":[]},{"text":"impl Unpin for GroupId","synthetic":true,"types":[]},{"text":"impl Unpin for GroupEpoch","synthetic":true,"types":[]},{"text":"impl Unpin for GroupContext","synthetic":true,"types":[]},{"text":"impl Unpin for GroupConfig","synthetic":true,"types":[]},{"text":"impl Unpin for GroupError","synthetic":true,"types":[]},{"text":"impl Unpin for WelcomeError","synthetic":true,"types":[]},{"text":"impl Unpin for ApplyCommitError","synthetic":true,"types":[]},{"text":"impl Unpin for DecryptionError","synthetic":true,"types":[]},{"text":"impl Unpin for CreateCommitError","synthetic":true,"types":[]},{"text":"impl Unpin for ManagedGroup","synthetic":true,"types":[]},{"text":"impl Unpin for ManagedGroupConfig","synthetic":true,"types":[]},{"text":"impl Unpin for UpdatePolicy","synthetic":true,"types":[]},{"text":"impl Unpin for ManagedGroupCallbacks","synthetic":true,"types":[]},{"text":"impl Unpin for MLSMessage","synthetic":true,"types":[]},{"text":"impl Unpin for GroupError","synthetic":true,"types":[]},{"text":"impl Unpin for MlsGroup","synthetic":true,"types":[]},{"text":"impl Unpin for KeyPackage","synthetic":true,"types":[]},{"text":"impl Unpin for KeyPackageBundle","synthetic":true,"types":[]},{"text":"impl Unpin for KeyPackageError","synthetic":true,"types":[]},{"text":"impl Unpin for Commit","synthetic":true,"types":[]},{"text":"impl Unpin for ConfirmationTag","synthetic":true,"types":[]},{"text":"impl Unpin for GroupInfo","synthetic":true,"types":[]},{"text":"impl Unpin for PathSecret","synthetic":true,"types":[]},{"text":"impl Unpin for GroupSecrets","synthetic":true,"types":[]},{"text":"impl Unpin for EncryptedGroupSecrets","synthetic":true,"types":[]},{"text":"impl Unpin for Welcome","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalID","synthetic":true,"types":[]},{"text":"impl Unpin for QueuedProposal","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalQueue","synthetic":true,"types":[]},{"text":"impl Unpin for AddProposal","synthetic":true,"types":[]},{"text":"impl Unpin for UpdateProposal","synthetic":true,"types":[]},{"text":"impl Unpin for RemoveProposal","synthetic":true,"types":[]},{"text":"impl Unpin for ProposalType","synthetic":true,"types":[]},{"text":"impl Unpin for Proposal","synthetic":true,"types":[]},{"text":"impl Unpin for LeafIndex","synthetic":true,"types":[]},{"text":"impl Unpin for HkdfLabel","synthetic":true,"types":[]},{"text":"impl Unpin for EpochSecrets","synthetic":true,"types":[]},{"text":"impl Unpin for RatchetTree","synthetic":true,"types":[]},{"text":"impl Unpin for UpdatePathNode","synthetic":true,"types":[]},{"text":"impl Unpin for UpdatePath","synthetic":true,"types":[]},{"text":"impl Unpin for TreeError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ParentNodeHashInput&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for LeafNodeHashInput&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for NodeIndex","synthetic":true,"types":[]},{"text":"impl Unpin for Node","synthetic":true,"types":[]},{"text":"impl Unpin for ParentNode","synthetic":true,"types":[]},{"text":"impl Unpin for NodeType","synthetic":true,"types":[]},{"text":"impl Unpin for PathKeys","synthetic":true,"types":[]},{"text":"impl Unpin for PrivateTree","synthetic":true,"types":[]},{"text":"impl Unpin for TreeContext","synthetic":true,"types":[]},{"text":"impl Unpin for SecretTreeNode","synthetic":true,"types":[]},{"text":"impl Unpin for SecretTree","synthetic":true,"types":[]},{"text":"impl Unpin for SecretTreeError","synthetic":true,"types":[]},{"text":"impl Unpin for SecretType","synthetic":true,"types":[]},{"text":"impl Unpin for SecretTypeError","synthetic":true,"types":[]},{"text":"impl Unpin for SenderRatchet","synthetic":true,"types":[]},{"text":"impl Unpin for TreeMathError","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()