const LogicModule = (function () {
  /**
   *
   * @param id: Number
   * @param clickedAnimals: Array of numbers
   * @returns True if found (clicked), false otherwise.
   */
  const alreadyClicked = (id, clickedAnimals) =>
    clickedAnimals.find((val) => val === id);

  /// code from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj using the Fisher-Yates algorithm
  const shuffleArray = (array) => {
    let newArray = array;

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  };

  return { alreadyClicked, shuffleArray };
})();

export default LogicModule;
