import React from 'react';
import scssObj from './Starter.scss';

interface Props {
  matrix: number[][];
  handleStartSolving: () => void;
}

function Starter({ matrix, handleStartSolving }: Props) {
  return <div className={`${scssObj.baseClass}__container`}>Starter</div>;
}

export default Starter;
