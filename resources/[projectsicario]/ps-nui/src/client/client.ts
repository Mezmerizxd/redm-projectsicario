on("ps-nui", (nui, toggle) => {
  SetNuiFocus(toggle, toggle);
  SendNuiMessage(JSON.stringify({action: nui, data: toggle}));
})
