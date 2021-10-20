class PlayerManager {
  protected static instance: PlayerManager;

  static getInstance() {
    if (!PlayerManager.instance) {
      PlayerManager.instance = new PlayerManager();
    }
    return PlayerManager.instance;
  };

  isReady = false;

  Citizen = null;
  CitizenId = null;
  Steam = null;
  License = null;

  Money = null;
  MetaData = null;
  CharacterData = null;
}

export default PlayerManager;