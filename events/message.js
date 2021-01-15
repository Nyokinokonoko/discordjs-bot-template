module.exports = async (client, message) => {
  if (message.author.bot) return;

  const args = message.content
    .replace(/　/g, " ")
    .slice(process.env.BOT_COMMAND_PREFIX.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (!cmd) return;

  cmd.run(client, message, args);
};
