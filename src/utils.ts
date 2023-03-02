import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { MetadataObject as MetadataEntity } from "../generated/schema";

export function createEmptyMetadata(sbtId: BigInt): MetadataEntity {
  const metadata = new MetadataEntity(Bytes.fromByteArray(Bytes.fromBigInt(sbtId)));
  metadata.sbtId = sbtId;
  return metadata;
}
