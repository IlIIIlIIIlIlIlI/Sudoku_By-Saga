import React from 'react';
import Button from '@mui/material/Button';
import scssObj from './Starter.scss';

interface Props {
  matrix: number[][];
  handleStartSolving: () => void;
}

function Starter({ matrix, handleStartSolving }: Props) {
  return (
    <div className={`${scssObj.baseClass}__container`}>
      <Button
        variant='contained'
        onClick={handleStartSolving}
      >
        Suraj
      </Button>
    </div>
  );
}

export default Starter;
