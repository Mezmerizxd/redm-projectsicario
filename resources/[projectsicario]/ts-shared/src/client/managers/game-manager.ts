class GameManager {
  protected static instance: GameManager;

  static getInstance() {
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  public isNuiReady = false;

  Delay = (ms) => new Promise(res => setTimeout(res, ms));
}

export default GameManager;