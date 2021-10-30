import {PedCoords, SpawnLocations} from "../../config";

class SpawnManager {
  protected static instance: SpawnManager;

  Delay = (ms) => new Promise(res => setTimeout(res, ms));

  public Initialize() {
    while (true) {
      setTimeout(() => {}, 0);
      if (NetworkIsSessionStarted()) {
        console.log("Session started.");
        this.TemporarySpawn();
        return;
      }
    }
  }

  public SpawnPlayer(data) {
    const ped = PlayerPedId();
    let tick = setTick(async() => {
      emit("ps-nui", "nui-spawndialog", false);
      DoScreenFadeOut(300);
      SetEntityCoords(ped, data.coords.x, data.coords.y, data.coords.z, false, false, false, true);
      FreezeEntityPosition(ped, false);
      SetEntityAlpha(ped, 255, 0);
      setTimeout(() => {}, 1000);
      DoScreenFadeIn(1000);
      clearTick(tick);
    })
  }

  public GetSpawnLocations() {
    return(SpawnLocations);
  }

  private TemporarySpawn() {
    const ped = PlayerPedId();
    const c_model = GetHashKey("player_zero");

    let tick = setTick(async() => {
      RequestModel(c_model);
      while (!HasModelLoaded(c_model)){
        this.Delay(0);
      }
      const c_ped = CreatePed(2, c_model, PedCoords.x, PedCoords.y, PedCoords.z, PedCoords.h, false, true);
      SetEntityInvincible(c_ped, true);
      PlaceObjectOnGroundProperly(c_ped);
      DoScreenFadeOut(300);
      this.Delay(1000);
      SetEntityAlpha(ped, 0, 0);
      FreezeEntityPosition(ped, true);
      SetEntityCoords(ped, PedCoords.x, PedCoords.y, PedCoords.z, false, false, false, true);
      SetEntityHeading(ped, PedCoords.h);
      SetMinimapHideFow(true);
      this.Delay(1000);
      ShutdownLoadingScreen();
      ShutdownLoadingScreenNui();
      DoScreenFadeIn(1000);
      emit("ps-nui", "nui-spawndialog", true);
      clearTick(tick);
    });
  }
}

export default SpawnManager;