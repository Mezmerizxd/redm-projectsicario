import {Button} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import "./AdminMenu.scss";

const Navigation = () => {
  return(
    <strong>
      <div className="navigation">
        <div className="options">
          <Button>Main</Button>
          <Button>Secondary</Button>
          <Button  style={{float: "right"}} endIcon={<ExitToAppIcon />}>Close</Button>
        </div>
      </div>
    </strong>
  );
}

export default Navigation;

// onClick={() => Trigger("ps-menu:close", "ok", true)}