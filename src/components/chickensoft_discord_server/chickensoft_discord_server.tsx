import config from '@generated/docusaurus.config';
import DiscordServer from '@site/src/components/discord_server/discord_server';
import { lookup } from '@site/src/utils/lookup';
import React from 'react';

const logo = lookup(config, 'logo');
const discord = lookup(config, 'discord');
const discordInviteCode = lookup(config, 'discordInviteCode');

export default function ChickensoftDiscordServer() {
  return (
    <DiscordServer
      serverName={config.title}
      logo={logo}
      discordInviteCode={discordInviteCode}
      discord={discord}
    />
  );
}
