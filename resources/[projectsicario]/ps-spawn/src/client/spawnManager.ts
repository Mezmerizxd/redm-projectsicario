import GameManager from "../../../ts-shared/src/client/managers/game-manager";
import NuiManager from "../../../ts-shared/src/client/managers/nui-manager";
import Config from "../shared/config";

class SpawnManager {
  protected static instance: SpawnManager;

  static getInstance() {
    if (!SpawnManager.instance) {
      SpawnManager.instance = new SpawnManager();
    }
    return SpawnManager.instance;
  }

  private gameManager = GameManager.getInstance();
  private nuiManager = NuiManager.getInstance();

  public Nui(toggle: boolean){
    this.nuiManager.DisplayNui("nui-spawn", toggle);
  }

  public HandleSpawn() {
    while (true) {
      this.gameManager.Delay(0);
      if (NetworkIsSessionStarted()) {
        console.log("Session started.");
        this.temporarySpawn();
        return;
      }
    }
  }

  public SpawnPed(cData: any) {
    this.Nui(false);
    let ped = PlayerPedId();
    const tick = setTick(async () => {
      DoScreenFadeOut(300);
      SetEntityCoords(ped, cData.coords.x, cData.coords.y, cData.coords.z, false, false, false, true);
      FreezeEntityPosition(ped, false);
      SetEntityAlpha(ped, 255, 0);
      await this.gameManager.Delay(1000);
      DoScreenFadeIn(1000);
      clearTick(tick);
    })
  }

  private temporarySpawn() {
    const cfg = Config.getInstance();
    let ped = PlayerPedId();
    let c_model = GetHashKey("player_zero");
    const tick = setTick(async () => {
      RequestModel(c_model);
      while (!HasModelLoaded(c_model)){
        await this.gameManager.Delay(0);
      }
      let c_ped = CreatePed(2, c_model, cfg.PedCoords.x, cfg.PedCoords.y, cfg.PedCoords.z, cfg.PedCoords.h, false, true);
      SetEntityInvincible(c_ped, true);
      PlaceObjectOnGroundProperly(c_ped);
      DoScreenFadeOut(300);
      await this.gameManager.Delay(1000);
      SetEntityAlpha(ped, 0, 0);
      FreezeEntityPosition(ped, true);
      SetEntityCoords(ped, cfg.PedCoords.x, cfg.PedCoords.y, cfg.PedCoords.z, false, false, false, true);
      SetEntityHeading(ped, cfg.PedCoords.h);
      SetMinimapHideFow(true);
      await this.gameManager.Delay(1000);
      ShutdownLoadingScreen();
      ShutdownLoadingScreenNui();
      DoScreenFadeIn(1000);
      clearTick(tick);
    })
    
  }
}

export default SpawnManager;