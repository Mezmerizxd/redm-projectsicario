export let ServerCallbacks = {};

export function TriggerCallback(name, cb, ...func){
  ServerCallbacks[name] = cb;
}