import NuiManager from "../../../ts-shared/src/client/managers/nui-manager";

const nuiManager = NuiManager.getInstance();

RegisterCommand("menu", () => {
  nuiManager.DisplayNui("nui-adminmenu", true);
}, true);

RegisterNuiCallbackType("ps-adminmenu:nui:toggle")
on ("__cfx_nui:ps-adminmenu:nui:toggle", (data: any, cb: any) => {
  nuiManager.DisplayNui(data.nui, data.toggle);
  cb("ok");
});
