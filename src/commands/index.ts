import { CustomCommand } from "../@types/custom";
import { InviteCommand } from "./Invite";
import { VoteCommand } from "./Vote";

export const Commands: Array<CustomCommand> = [InviteCommand, VoteCommand];
