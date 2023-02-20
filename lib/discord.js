import { WebhookClient } from "discord.js";
import { config } from "./config.js";

export function notifyDiscord(htmlMessage) {
  const discordHook = config.get("notifications.discord.hook")
  const hook = new WebhookClient(discordHook)
  hook.send({ content: htmlMessage })
}
