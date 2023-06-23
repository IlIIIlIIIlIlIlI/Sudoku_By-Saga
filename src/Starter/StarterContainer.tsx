import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { SudokuSuperState as State } from '../SuperStore/store';
import {
  selectIsSudokuBeingCalculated,
  selectMatrix9x9,
  startSolvingMatrixFromScrach,
} from '../Redux';
import Starter from './Starter';

const mapState = (state: State) => {
  const matrix = selectMatrix9x9(state);

  const isSudokuBeingCalculated = selectIsSudokuBeingCalculated(state);

  return { matrix, isSudokuBeingCalculated };
};

const mapDispatch = (dispatch: Dispatch) => {
  const handleStartSolving = () => {
    dispatch(startSolvingMatrixFromScrach());
  };

  return {
    handleStartSolving,
  };
};

export default connect(mapState, mapDispatch)(Starter);
