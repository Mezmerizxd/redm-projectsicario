import React from 'react';
import ReactDOM from 'react-dom';
import { debugData } from './nui/nui';

import Test from "./nui/test";
import SpawnDialog from "./nui/SpawnDialog";

debugData([
  {
    action: 'nui-spawndialog',
    data: true
  }
])

ReactDOM.render(
  <React.StrictMode>
    <Test />
    <SpawnDialog />
  </React.StrictMode>,
  document.getElementById('root')
);