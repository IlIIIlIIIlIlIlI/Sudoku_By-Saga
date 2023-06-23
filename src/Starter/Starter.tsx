import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import scssObj from './Starter.scss';

interface Props {
  matrix: number[][];
  isSudokuBeingCalculated: boolean;
  handleStartSolving: () => void;
}

function Starter({
  matrix,
  handleStartSolving,
  isSudokuBeingCalculated,
}: Props) {
  if (isSudokuBeingCalculated) {
    return (
      <div className={`${scssObj.baseClass}__loader`}>
        <CircularProgress size={150} />
      </div>
    );
  }

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
