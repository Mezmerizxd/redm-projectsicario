import { ServerCallbacks } from "./functions";
import GameManager from "./managers/game-manager";
import NuiManager from "./managers/nui-manager";

onNet("ps-core:client:TriggerCallback", (name, ...func) => {
  if (ServerCallbacks[name] != null){
    ServerCallbacks[name](...func);
    ServerCallbacks[name] = null;
  }
})

