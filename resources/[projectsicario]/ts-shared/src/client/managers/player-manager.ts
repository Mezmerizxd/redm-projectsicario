class PlayerManager {
  protected static instance: PlayerManager;

  static getInstance() {
    if (!PlayerManager.instance) {
      PlayerManager.instance = new PlayerManager();
    }
    return PlayerManager.instance;
  };

  isReady = false;

  CitizenId = null;
  Cid = null;
  Steam = null;
  License = null;

  Money = null;
  MetaData = null;
  CharacterData = null;
}

export default PlayerManager;