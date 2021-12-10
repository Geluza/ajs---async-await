import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const parsing = await json(data);
      const saving = new GameSaving(JSON.parse(parsing));
      return saving;
    } catch (error) {
      return error;
    }
  }
}
