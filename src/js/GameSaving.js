export default class GameSaving {
  constructor(date) {
    const { id, created, userInfo } = date;
    this.created = created;
    this.id = id;
    this.userInfo = {
      id: userInfo.id,
      name: userInfo.name,
      level: userInfo.level,
      points: userInfo.points,
    };
  }
}
