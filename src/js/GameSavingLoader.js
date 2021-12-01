import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const parsing = await json();
    const saving = await new GameSaving(JSON.parse(parsing));
    return saving
  } catch (error) {
    return error;
  }
}
