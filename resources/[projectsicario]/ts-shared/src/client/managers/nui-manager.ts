class NuiManager {
  protected static instance: NuiManager;

  static getInstance() {
    if (!NuiManager.instance) {
      NuiManager.instance = new NuiManager();
    }
    return NuiManager.instance;
  }

  Nui(nuiName: string, display: boolean){

  }
}

export default NuiManager;