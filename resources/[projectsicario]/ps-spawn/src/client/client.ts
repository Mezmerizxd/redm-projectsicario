import GameManager from "../../../ts-shared/src/client/managers/game-manager";
import Config from "../shared/config";
import SpawnManager from "./spawnManager";

const cfg = Config.getInstance();
const spawnManager = SpawnManager.getInstance();
const gameManager = GameManager.getInstance();

setImmediate(() => { 
  spawnManager.handleSpawn();
  setTimeout(() => {
    spawnManager.Nui(true);
  }, 1000);
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
