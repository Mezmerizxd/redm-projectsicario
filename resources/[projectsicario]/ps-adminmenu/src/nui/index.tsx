import { useState } from 'react';
import Draggable from 'react-draggable';

import {useNuiEvent, fetchNui, debugData} from "./nui";

import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Options from "./Options";
import "./AdminMenu.scss";

debugData([
  {
    action: 'nui-adminmenu',
    data: true,
  }
])

const AdminMenu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useNuiEvent<boolean>('nui-adminmenu', (data) => {
    setIsVisible(data);
  })  

  return(
    <div className="container">
      <Draggable handle="strong">
      <div className="adminmenu-container" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        {Sidebar()}
        {Navigation()}
        {Options()}
      </div>
      </Draggable>
    </div>
  );
}

export default AdminMenu;