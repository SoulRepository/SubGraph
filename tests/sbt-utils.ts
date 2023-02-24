import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  BurnExtraValidatorSet,
  Burnt,
  ForciblyBurnt,
  MetadataRegistrySet,
  Minted,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TransferBatch,
  TransferSingle,
  URI,
  URIProviderSet
} from "../generated/SBT/SBT"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBurnExtraValidatorSetEvent(
  _burnExtraValidator: Address
): BurnExtraValidatorSet {
  let burnExtraValidatorSetEvent = changetype<BurnExtraValidatorSet>(
    newMockEvent()
  )

  burnExtraValidatorSetEvent.parameters = new Array()

  burnExtraValidatorSetEvent.parameters.push(
    new ethereum.EventParam(
      "_burnExtraValidator",
      ethereum.Value.fromAddress(_burnExtraValidator)
    )
  )

  return burnExtraValidatorSetEvent
}

export function createBurntEvent(_sbtId: BigInt, _burner: Address): Burnt {
  let burntEvent = changetype<Burnt>(newMockEvent())

  burntEvent.parameters = new Array()

  burntEvent.parameters.push(
    new ethereum.EventParam("_sbtId", ethereum.Value.fromUnsignedBigInt(_sbtId))
  )
  burntEvent.parameters.push(
    new ethereum.EventParam("_burner", ethereum.Value.fromAddress(_burner))
  )

  return burntEvent
}

export function createForciblyBurntEvent(_sbtId: BigInt): ForciblyBurnt {
  let forciblyBurntEvent = changetype<ForciblyBurnt>(newMockEvent())

  forciblyBurntEvent.parameters = new Array()

  forciblyBurntEvent.parameters.push(
    new ethereum.EventParam("_sbtId", ethereum.Value.fromUnsignedBigInt(_sbtId))
  )

  return forciblyBurntEvent
}

export function createMetadataRegistrySetEvent(
  _metadataRegistry: Address
): MetadataRegistrySet {
  let metadataRegistrySetEvent = changetype<MetadataRegistrySet>(newMockEvent())

  metadataRegistrySetEvent.parameters = new Array()

  metadataRegistrySetEvent.parameters.push(
    new ethereum.EventParam(
      "_metadataRegistry",
      ethereum.Value.fromAddress(_metadataRegistry)
    )
  )

  return metadataRegistrySetEvent
}

export function createMintedEvent(
  _sbtId: BigInt,
  _recipients: Array<Address>
): Minted {
  let mintedEvent = changetype<Minted>(newMockEvent())

  mintedEvent.parameters = new Array()

  mintedEvent.parameters.push(
    new ethereum.EventParam("_sbtId", ethereum.Value.fromUnsignedBigInt(_sbtId))
  )
  mintedEvent.parameters.push(
    new ethereum.EventParam(
      "_recipients",
      ethereum.Value.fromAddressArray(_recipients)
    )
  )

  return mintedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createURIProviderSetEvent(
  _uriProvider: Address
): URIProviderSet {
  let uriProviderSetEvent = changetype<URIProviderSet>(newMockEvent())

  uriProviderSetEvent.parameters = new Array()

  uriProviderSetEvent.parameters.push(
    new ethereum.EventParam(
      "_uriProvider",
      ethereum.Value.fromAddress(_uriProvider)
    )
  )

  return uriProviderSetEvent
}
