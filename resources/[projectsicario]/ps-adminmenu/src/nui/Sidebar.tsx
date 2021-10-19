import {Button} from "@mui/material";

import "./AdminMenu.scss";

const Sidebar = () => {
  return(
    <strong>
      <div className="sidebar">
        <div className="options">
          <Button className='sidebarButton'>Button1</Button>
          <Button className='sidebarButton'>Button2</Button>
        </div>
      </div>
    </strong>
  );
}

export default Sidebar;