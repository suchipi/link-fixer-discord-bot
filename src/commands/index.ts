import { CustomCommand } from "../@types/custom";
import { HelpCommand } from "./Help";
import { InviteCommand } from "./Invite";
import { VoteCommand } from "./Vote";

export const Commands: Array<CustomCommand> = [
  HelpCommand,
  InviteCommand,
  VoteCommand,
];
