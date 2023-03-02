import { Address, BigInt, Bytes, log } from "@graphprotocol/graph-ts";
import { MetadataDeleted as MetadataDeletedEvent, MetadataSet as MetadataSetEvent, Metadata as MetadataContract } from "../generated/Metadata/Metadata";
import { MetadataObject as MetadataEntity } from "../generated/schema";
import { METADATA_REGISTRY_ADDRESS } from "./constants";
import { createEmptyMetadata } from "./utils";

export function handleMetadataDeleted(event: MetadataDeletedEvent): void {
  log.warning("MetadataDeleted {}", [event.params._sbtId.toHexString()]);

  let contract = MetadataContract.bind(Address.fromString(METADATA_REGISTRY_ADDRESS));
  let metadataEntity = MetadataEntity.load(Bytes.fromByteArray(Bytes.fromBigInt(event.params._sbtId)));

  if (metadataEntity === null) {
    let emptyMetadata = createEmptyMetadata(event.params._sbtId);

    emptyMetadata.createdBlockNumber = event.block.number;
    emptyMetadata.createdBlockTimestamp = event.block.timestamp;

    emptyMetadata.save();
    return;
  }

  let metadataFromContract = contract.metadata(event.params._sbtId);
  metadataEntity.digiProofType = metadataFromContract.value0;
  metadataEntity.description = metadataFromContract.value1;
  metadataEntity.uri = metadataFromContract.value2;

  metadataEntity.updatedBlockNumber = event.block.number;
  metadataEntity.updatedBlockTimestamp = event.block.timestamp;

  metadataEntity.save();
}

export function handleMetadataSet(event: MetadataSetEvent): void {
  log.warning("MetadataSet {}", [event.params._sbtId.toHexString()]);

  let contract = MetadataContract.bind(Address.fromString(METADATA_REGISTRY_ADDRESS));
  let metadataEntity = MetadataEntity.load(Bytes.fromByteArray(Bytes.fromBigInt(event.params._sbtId)));

  if (metadataEntity === null) {
    let emptyMetadata = createEmptyMetadata(event.params._sbtId);
    emptyMetadata.save();
    return;
  }

  let metadataFromContract = contract.metadata(event.params._sbtId);
  metadataEntity.digiProofType = metadataFromContract.value0;
  metadataEntity.description = metadataFromContract.value1;
  metadataEntity.uri = metadataFromContract.value2;

  metadataEntity.save();
}
