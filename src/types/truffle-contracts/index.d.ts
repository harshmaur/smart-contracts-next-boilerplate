/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { InboxContract } from "./Inbox";
import { MigrationsContract } from "./Migrations";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "Inbox"): InboxContract;
      require(name: "Migrations"): MigrationsContract;
    }
  }
}

export { InboxContract, InboxInstance } from "./Inbox";
export { MigrationsContract, MigrationsInstance } from "./Migrations";