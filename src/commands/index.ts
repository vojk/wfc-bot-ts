import * as rank from "./getRank";
import * as leaderboard from "./leaderboard";
import * as embed from "./embed";
import * as achievement from "./achievement";
import * as ping from "./ping";
import * as quote from "./quotes";
import * as character from "./dnd/character";

// Collect all command data
export const commandData = [
    rank.data,
    leaderboard.data,
    embed.data,
    achievement.data,
    ping.data,
    quote.data,
    character.data,
].filter(command => command !== undefined);  // Ensure no undefined commands

// Export commands for handling
export const commands = {
    rank,
    leaderboard,
    embed,
    achievement,
    ping,
    quote,
    character,
};
