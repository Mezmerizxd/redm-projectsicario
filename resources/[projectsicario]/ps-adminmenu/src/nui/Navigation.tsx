import {Button} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useNuiEvent, fetchNui, debugData} from "./nui";
import "./AdminMenu.scss";

const Navigation = () => {
  function handleExit() {
    fetchNui("ps-adminmenu:nui:toggle", {nui: "nui-adminmenu", toggle: false});
  }
  
  return(
    <strong>
      <div className="navigation">
        <div className="options">
          <Button>Main</Button>
          <Button>Secondary</Button>
          <Button onClick={handleExit} style={{float: "right"}} endIcon={<ExitToAppIcon />}>Close</Button>
        </div>
      </div>
    </strong>
  );
}

export default Navigation;

// onClick={() => Trigger("ps-menu:close", "ok", true)}