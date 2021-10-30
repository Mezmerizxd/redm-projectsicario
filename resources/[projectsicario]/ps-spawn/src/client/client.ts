import SpawnManager from "./managers/spawn-manager";

const spawnManager = new SpawnManager;

setImmediate(() => {
  setTimeout(() => {
    spawnManager.Initialize();
  }, 2000);
});

RegisterNuiCallbackType("SpawnPlayer")
on ("__cfx_nui:SpawnPlayer", (data, cb) => {
  spawnManager.SpawnPlayer(data);
  cb("ok");
});

RegisterNuiCallbackType("GetSpawnLocations")
on ("__cfx_nui:GetSpawnLocations", (cb) => {
  cb(spawnManager.GetSpawnLocations())
});