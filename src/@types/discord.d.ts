import { Collection } from "discord.js";

// extend discord.js Client type to allow commands collection
declare module "discord.js" {
  export interface Client {
    commands: Collection<any, any>;
  }
}
