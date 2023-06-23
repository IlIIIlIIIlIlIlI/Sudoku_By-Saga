import React, { useEffect, useState } from 'react';
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
  const [isCalledInitially, setIsCalledInitially] = useState<boolean>(false);

  useEffect(() => {
    if (!isCalledInitially) {
      handleStartSolving();
      setIsCalledInitially(true);
    }
  }, [handleStartSolving, isCalledInitially]);

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

      <div>
        {matrix.map((row) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {row.map((element) => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '40px',
                  width: '40px',
                }}
              >
                {element}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Starter;
