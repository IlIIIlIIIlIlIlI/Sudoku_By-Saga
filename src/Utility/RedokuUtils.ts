export const createBlankArray = () => {
  return new Array(9).fill(0);
};

export const createBlankMatrix = () => {
  const matrix: number[][] = [];

  for (let i = 0; i < 9; i++) {
    matrix.push(createBlankArray());
  }

  return matrix;
};

export const randomNumberGenerator = (lenght: number) => {
  return Math.floor(Math.random() * lenght);
};

export const selectRandomNumberFromSet = (numberSet: Set<number>) => {
  const numberArray = Array.from(numberSet);
  const randomIndex = randomNumberGenerator(numberArray.length);

  return numberArray[randomIndex];
};

/**
 * Set of number from 1 to 9
 */
export const setOfAllNumbers = Array.from({ length: 9 }, (_, i) => i + 1);

/**
 * Create 3x3 random diagonal matrix
 */
export const create3by3RandomMatrix = () => {
  const numbersToBeAdded = new Set<number>(setOfAllNumbers);

  const matrix3x3: number[][] = [];
  for (let i = 0; i < 3; i++) {
    const numberArray: number[] = [];

    for (let j = 0; j < 3; j++) {
      const randomNumberSelected = selectRandomNumberFromSet(numbersToBeAdded);
      numberArray.push(randomNumberSelected);

      numbersToBeAdded.delete(randomNumberSelected);
    }

    matrix3x3.push(numberArray);
  }

  return matrix3x3;
};

export const matrixMapper = (
  parentMatric: number[][],
  childMatrix: number[][],
  horizontalIndex: number,
  verticalIndex: number
) => {
  const blankMatrix = createBlankMatrix();

  /**
   * Parent Mapper
   */
  for (let i = 0; i < blankMatrix.length; i++) {
    for (let j = 0; j < blankMatrix.length; j++) {
      blankMatrix[i][j] = parentMatric[i][j];
    }
  }

  /**
   * Child mapper
   */
  for (let i = horizontalIndex; i < horizontalIndex + 3; i++) {
    for (let j = verticalIndex; j < verticalIndex + 3; j++) {
      blankMatrix[i][j] = childMatrix[i % 3][j % 3];
    }
  }

  return blankMatrix;
};
