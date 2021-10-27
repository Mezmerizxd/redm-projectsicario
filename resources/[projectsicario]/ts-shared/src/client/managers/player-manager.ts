class PlayerManager {
  protected static instance: PlayerManager;

  static getInstance() {
    if (!PlayerManager.instance) {
      PlayerManager.instance = new PlayerManager();
    }
    return PlayerManager.instance;
  };

  isReady;

  Citizen;
  CitizenId;
  Steam;
  License;

  Money;
  MetaData;
  CharacterMeta;
}

export default PlayerManager;