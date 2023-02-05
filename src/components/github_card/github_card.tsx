import { languageColors } from '@site/src/components/github_card/github_languages';
import GithubLogo from '@site/src/components/github_logo/github_logo';
import React, { useEffect, useState } from 'react';

import css from './github_card.module.css';

export type GithubCardProps = {
  profile: string;
  repo: string;
  logo: string;
};

export default function GithubCard(props: GithubCardProps): JSX.Element {
  const [description, setDescription] = useState('');
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);
  const [language, setLanguage] = useState('');

  var url = `https://github.com/${props.profile}/${props.repo}`;
  let requestUrl = `https://api.github.com/repos/${props.profile}/${props.repo}`;

  useEffect(() => {
    let request = new XMLHttpRequest();
    request.onload = function () {
      let data = JSON.parse(this.response);

      if (request.status != 200) {
        return;
      }

      let description = data['description'];
      if (typeof description !== 'undefined') {
        setDescription(description);
      }

      let lang = data['language'];
      if (
        typeof lang !== 'undefined' &&
        typeof languageColors[lang] !== 'undefined'
      ) {
        setLanguage(lang);
      }

      let stars = data['stargazers_count'];
      if (typeof stars !== 'undefined') {
        setStars(stars);
      }

      let forks = data['forks'];
      if (typeof forks !== 'undefined') {
        setForks(forks);
      }
    };

    request.open('GET', requestUrl, true);
    request.send();
  }, []);

  return (
    <a href={url} className={css.ghCard}>
      <header className={css.header}>
        <div className={css.ghLogo}>
          <GithubLogo size={24} />
        </div>
        <div className={css.headerTitle}>
          <h2>{props.profile}/</h2>
          <h1>{props.repo}</h1>
        </div>
        <div className={css.headerLogo}>
          <img src={props.logo} width="auto" height="100%" />
        </div>
      </header>
      <summary className={css.description}>{description}</summary>
      <footer className={css.footer}>
        <div className={css.footerItem}>
          <svg
            width="21"
            height="24"
            role="img"
            version="1.1"
            viewBox="0 0 14 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
            ></path>
          </svg>
          <div className={css.symbolAndLabel}>
            <span className={css.symbol}>{stars}</span>
            <span className={css.label}>Stars</span>
          </div>
        </div>
        <div className={css.footerItem}>
          <svg
            width="15"
            height="24"
            role="img"
            version="1.1"
            viewBox="0 0 10 16"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
            ></path>
          </svg>
          <div className={css.symbolAndLabel}>
            <span className={css.symbol}>{forks}</span>
            <span className={css.label}>Forks</span>
          </div>
        </div>
        <div className={css.footerItemLanguages}>
          <span
            className={css.langColor}
            style={{
              backgroundColor: language
                ? languageColors[language].color
                : 'gray',
            }}
          ></span>
          <div className={css.symbolAndLabel}>
            <span className={css.symbol}>{language}</span>
          </div>
        </div>
      </footer>
    </a>
  );
}
