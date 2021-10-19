import AdminMenuManager from "./adminmenuManager";
import NuiManager from "../../../ts-shared/src/client/managers/nui-manager";

const adminmenu = AdminMenuManager.getInstance();
const nuiManager = NuiManager.getInstance();

RegisterCommand("menu", () => {
  nuiManager.DisplayNui("nui-adminmenu", true);
}, true);