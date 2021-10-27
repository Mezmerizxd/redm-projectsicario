import {TriggerCallback} from "../client/functions";

onNet("ps-core:server:TriggerCallback", (name, ...func) => {
  const source = (global as any).source;
  TriggerCallback(name, source, (...func) => {
    emit("ps-core:client:TriggerCallback", source, ...func);
  }, ...func)
})