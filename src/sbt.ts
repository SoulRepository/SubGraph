import { Address, Bytes, log, store } from "@graphprotocol/graph-ts";

import { Burnt as BurntEvent, ForciblyBurnt as ForciblyBurntEvent, Minted as MintedEvent } from "../generated/SBT/SBT";
import { Company, Burn } from "../generated/schema";
import { createEmptyMetadata } from "./utils";

export function handleMinted(event: MintedEvent): void {
  log.warning("Minted {}, {}", [
    event.params._sbtId.toHex(),
    event.params._recipients
      .map<string>((a) => a.toHex())
      .join(", "),
  ]);

  let users = event.params._recipients;

  let blockNumber = event.block.number;
  let blockTimestamp = event.block.timestamp;
  let transactionHash = event.transaction.hash;

  for (let i = 0; i < users.length; i += 1) {
    let address = users[i];
    let company = Company.load(address);
    if (company === null) {
      let newCompany = new Company(address);

      newCompany.address = address;
      newCompany.blockNumber = blockNumber;
      newCompany.blockTimestamp = blockTimestamp;
      newCompany.transactionHash = transactionHash;

      newCompany.save();
    }
  }

  let metadata = createEmptyMetadata(event.params._sbtId);

  metadata.createdBlockNumber = event.block.number;
  metadata.createdBlockTimestamp = event.block.timestamp;

  metadata.companies = users.map<Bytes>((a: Address) => Bytes.fromHexString(a.toHexString()));

  metadata.save();
}

export function handleBurnt(event: BurntEvent): void {
  log.warning("Burnt {}, {}", [event.params._sbtId.toHex(), event.params._burner.toHexString()]);

  let burn = new Burn(event.transaction.hash);
  burn.initiator = event.params._burner;
  burn.subId = event.params._sbtId;
  burn.blockNumber = event.block.number;
  burn.blockTimestamp = event.block.timestamp;
  burn.transactionHash = event.transaction.hash;

  burn.save();
}

export function handleForciblyBurnt(event: ForciblyBurntEvent): void {
  log.warning("ForciblyBurnt", []);
  store.remove("Metadata", event.params._sbtId.toHexString());
}
