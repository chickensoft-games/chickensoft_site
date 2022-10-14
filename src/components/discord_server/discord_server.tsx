import React, { useEffect, useState } from 'react';

import css from './discord_server.module.css';

export type DiscordServerProps = {
  /** Discord logo image url. */
  logo: string;
  /** Discord invite code portion of the url. */
  discordInviteCode: string;
  /** Discord invite url. */
  discord: string;
  /** Discord server name. */
  serverName: string;
};

/** Pretty little Discord server invite widget. Pulls data from Discord API. */
export default function DiscordServer(props: DiscordServerProps): JSX.Element {
  const [numMembers, setNumMembers] = useState(0);
  const [numOnline, setNumOnline] = useState(0);

  useEffect(() => {
    var request = new XMLHttpRequest();
    request.onload = function () {
      const data = JSON.parse(this.response);
      var numMembers = data['approximate_member_count'].toLocaleString('en');
      var numOnline = data['approximate_presence_count'].toLocaleString('en');
      setNumMembers(numMembers);
      setNumOnline(numOnline);
    };
    request.open(
      'GET',
      `https://discordapp.com/api/v6/invite/${props.discordInviteCode}?with_counts=true`,
      true
    );
    request.send();
  }, []);

  return (
    <div className={css.discordServer}>
      <h3 className={css.discordInviteText}>
        You have been invited to join a server
      </h3>
      <div className={css.discordInviteBody}>
        <div>
          <img src={props.logo} className={css.serverImage} />
        </div>
        <div className={css.discordInviteDetails}>
          <h3 className={css.discordInviteName}>
            {/* <!--Uncomment if server is verified
                                    <div className="discord-invite-verified">
                                        <svg className="discord-invite-verified-svg" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2"><path fill="currentColor" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path></svg>
                                        <div className="discord-invite-verified-tick">
                                            <svg className="discord-invite-verified-tick-svg" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2"><path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                    --> */}
            {props.serverName}
          </h3>
          <div className={css.discordInviteCounts}>
            <i
              className={`${css.discordInviteStatusIcon} ${css.discordInviteOnlineIcon}`}
            ></i>
            <strong className={css.discordInviteCount}>
              <span id="discordNumOnline">
                {numOnline && numOnline != 0 ? numOnline : '#'}
              </span>{' '}
              Online
            </strong>
            <i
              className={`${css.discordInviteStatusIcon} ${css.discordInviteOfflineIcon}`}
            ></i>
            <strong className={css.discordInviteCount}>
              <span id="discordNumMembers">
                {numMembers && numMembers != 0 ? numMembers : '#'}
              </span>{' '}
              Members
            </strong>
          </div>
        </div>
      </div>
      <div className={css.discordButtonContainer}>
        <a
          className={`button button--primary button--lg ${css.discordInviteJoinButton}`}
          href={props.discord}
        >
          Join
        </a>
      </div>
    </div>
  );
}
