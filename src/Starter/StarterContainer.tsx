import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SudokuSuperState as State } from '../SuperStore/store';
import {
  selectIsSudokuBeingCalculated,
  selectMatrix9x9,
  selectPuzzleMatrix,
  startSolvingDiagonalMatrices,
} from '../Redux';
import Starter from './Starter';
import { HardnessLevel } from '../Utility/RedokuUtils';

const mapState = (state: State) => {
  const matrix = selectMatrix9x9(state);

  const isSudokuBeingCalculated = selectIsSudokuBeingCalculated(state);

  const puzzleMatrix = selectPuzzleMatrix(state);

  return { matrix, isSudokuBeingCalculated, puzzleMatrix };
};

const mapDispatch = (dispatch: Dispatch) => {
  const handleStartSolving = () => {
    dispatch(startSolvingDiagonalMatrices(HardnessLevel.MEDIUM));
  };

  const handleStartSolvingWithCustomLevel = (level: HardnessLevel) => {
    dispatch(startSolvingDiagonalMatrices(level));
  };

  return {
    handleStartSolvingWithCustomLevel,
    handleStartSolving,
  };
};

export default connect(mapState, mapDispatch)(Starter);
