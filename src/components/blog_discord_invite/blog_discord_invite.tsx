import ChickensoftDiscordServer from '@site/src/components/chickensoft_discord_server/chickensoft_discord_server';
import clsx from 'clsx';
import React from 'react';

export default function BlogDiscordInvite() {
  return (
    <div className="row">
      <div className={clsx('col col--12 padding-vert--sm')}>
        <ChickensoftDiscordServer />
      </div>
    </div>
  );
}
