export let ServerCallbacks = {};

export const CreateCallback = (name, cb) => {
  ServerCallbacks[name] = cb
}