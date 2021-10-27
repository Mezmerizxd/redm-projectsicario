import Config from "../shared/config";
import SpawnManager from "../../../ts-shared/src/client/managers/spawn-manager";
import PlayerManager from "../../../ts-shared/src/client/managers/player-manager";
import GameManager from "../../../ts-shared/src/client/managers/game-manager";

const cfg = Config.getInstance();
const spawnManager = SpawnManager.getInstance();
const playerManager = PlayerManager.getInstance();
const gameManager = GameManager.getInstance();

setImmediate(async () => { 
  await gameManager.Delay(5000);
  spawnManager.HandleSpawn();
  spawnManager.Nui(true);
})

RegisterNuiCallbackType("ps-spawn:ts:GetSpawnLocations")
on ("__cfx_nui:ps-spawn:ts:GetSpawnLocations", (data: any, cb: any) => {
  cb(cfg.SpawnLocations);
});

RegisterNuiCallbackType("ps-spawn:ts:Spawn")
on ("__cfx_nui:ps-spawn:ts:Spawn", (data: any, cb: any) => {
  spawnManager.SpawnPed(data);
  cb("ok");
});
