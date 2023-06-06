import React from 'react';

interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return (
    <h2>{title}</h2>
  );
};

export default Title;