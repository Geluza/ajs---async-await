import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => saving)
  .catch((err) => {
    throw new Error(err);
  });
