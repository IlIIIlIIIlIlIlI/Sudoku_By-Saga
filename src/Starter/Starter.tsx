import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import scssObj from './Starter.scss';
import { HardnessLevel } from '../Utility/RedokuUtils';

const sudokuMapper = (numberMatrix: number[][]) => {
  return (
    <div>
      {numberMatrix.map((row) => (
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
  );
};

interface Props {
  matrix: number[][];
  puzzleMatrix: number[][];
  isSudokuBeingCalculated: boolean;
  handleStartSolving: () => void;
  handleStartSolvingWithCustomLevel: (level: HardnessLevel) => void;
}

function Starter({
  matrix,
  puzzleMatrix,
  handleStartSolving,
  handleStartSolvingWithCustomLevel,
  isSudokuBeingCalculated,
}: Props) {
  const [hardness, setHardness] = useState<HardnessLevel>(HardnessLevel.MEDIUM);
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
      <div className={`${scssObj.baseClass}__dropdown`}>
        <div className={`${scssObj.baseClass}__dropdown-container`}>
          <FormControl
            fullWidth
            className={`${scssObj.baseClass}__dropdown-container`}
          >
            <InputLabel>Hardness</InputLabel>
            <Select
              value={hardness}
              label='Hardness'
              onChange={(event: SelectChangeEvent) => {
                setHardness(event.target.value as HardnessLevel);
                handleStartSolvingWithCustomLevel(
                  event.target.value as HardnessLevel
                );
              }}
              className={`${scssObj.baseClass}__dropdown-container`}
            >
              {Object.keys(HardnessLevel).map((hardness) => {
                return <MenuItem value={hardness}>{hardness}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={`${scssObj.baseClass}__title`}>Solution</div>
      {sudokuMapper(matrix)}
      <div className={`${scssObj.baseClass}__title`}>Puzzle</div>
      {sudokuMapper(puzzleMatrix)}
    </div>
  );
}

export default Starter;
