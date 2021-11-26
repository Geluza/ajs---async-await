import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const savingLoad = await GameSavingLoader.load();
    return savingLoad;
  } catch (error) {
    throw new Error(error);
  }
})();


// GameSavingLoader.load()
// .then((saving) => saving)
// .catch((err) => {
//  throw new Error(err);
// });
