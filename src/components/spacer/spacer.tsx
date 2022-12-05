import React from 'react';

export type SpacerProps = {
  children: JSX.Element[];
};

export default function Spacer(props: SpacerProps): JSX.Element {
  return (
    <section style={{ marginBottom: 'var(--ifm-leading)' }}>
      {props.children}
    </section>
  );
}
