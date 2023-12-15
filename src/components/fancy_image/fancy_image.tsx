import React from 'react';

interface FancyImageProps {
  src: any;
  alt: string;
  children: JSX.Element[];
  widthOverride?: string;
}

export default function FancyImage(props: FancyImageProps): JSX.Element {
  return (
    <figure
      style={{ margin: '0px 0px var(--ifm-leading)', textAlign: 'center' }}
    >
      <a href={props.src}>
        <img
          src={props.src}
          alt={props.alt}
          style={{ width: props.widthOverride ? props.widthOverride : '100%' }}
        />
      </a>
      <figcaption
        style={{
          fontSize: '0.8rem',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
      >
        {props.children}
      </figcaption>
    </figure>
  );
}
