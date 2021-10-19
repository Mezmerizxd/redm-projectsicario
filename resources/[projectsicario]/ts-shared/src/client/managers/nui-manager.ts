class NuiManager {
  protected static instance: NuiManager;

  static getInstance() {
    if (!NuiManager.instance) {
      NuiManager.instance = new NuiManager();
    }
    return NuiManager.instance;
  }

  DisplayNui(nuiName: string, toggle: boolean){
    SetNuiFocus(toggle, toggle);
    SendNuiMessage(JSON.stringify({action: nuiName, data: toggle}));
  }
}

export default NuiManager;