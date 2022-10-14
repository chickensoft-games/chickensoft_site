import config from '@generated/docusaurus.config';
import GithubLogo from '@site/src/components/github_logo/github_logo';
import { lookup } from '@site/src/utils/lookup';
import React from 'react';

import css from './github_navbar_icon.module.css';

export default function GitHubNavbarIcon(): JSX.Element {
  return (
    <a href={lookup(config, 'github')} className={css.ghNavIconContainer}>
      <GithubLogo className={css.ghNavIcon} size={24} />
    </a>
  );
}
