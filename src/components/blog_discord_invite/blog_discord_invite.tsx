import ChickensoftDiscordServer from '@site/src/components/chickensoft_discord_server/chickensoft_discord_server';
import clsx from 'clsx';
import React from 'react';
import css from './blog_discord_invite.module.css';

export default function BlogDiscordInvite() {
  return (
    <div className={clsx(css.inviteContainer)}>
      <ChickensoftDiscordServer />
    </div>
  );
}
