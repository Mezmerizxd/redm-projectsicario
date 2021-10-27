import Button from '@mui/material/Button';

import {debugData, useNuiEvent, fetchNui} from "./nui";

import "./Spawns.scss";
import { useState } from 'react';

debugData([
  {
    action: 'nui-spawn',
    data: true,
  }
])

const Spawn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [spawnLocations, setSpawnLocations] = useState([{id: "loading",location: "Loading...",coords: {x: 0,y: 0,z: 0,}}]);
  var [currentLocationData, setCurrentLocationData] = useState(null);
  var [currentLocation, setCurrentLocation] = useState(null);
  var [previousLocation, setPreviousLocation] = useState(null);

  useNuiEvent<boolean>('nui-spawn', (data) => {
    if(previousLocation != null){
      var prevElement = document.getElementById(previousLocation);
      prevElement?.classList.remove("selected");
    }
    setIsVisible(data);
    setCurrentLocationData(null)
    setCurrentLocation(null)
    setPreviousLocation(null)
    getSpawnLocations();
  })  

  const getSpawnLocations = () => {
    fetchNui("ps-spawn:ts:GetSpawnLocations").then(retData => {
      setSpawnLocations(retData);
    }).catch(e => {
      setSpawnLocations([{id: "debugLocation",location: "Debug or Failure",coords: {x: 0,y: 0,z: 0,}},{id: "debugLocation2",location: "Debug or Failure",coords: {x: 0,y: 0,z: 0,}}]);
    })
  }

  const Selected = (location: any) => {
    var element = document.getElementById(location.id);
    if(previousLocation != null){
      var prevElement = document.getElementById(previousLocation);
      prevElement?.classList.remove("selected");
    }
    element?.classList.add('selected');
    previousLocation = location.id;
    currentLocation = location.id;  
    currentLocationData = location;
  }

  const Submit = () => {
    if (currentLocation != null){
      fetchNui("ps-spawn:ts:Spawn", currentLocationData);
    }
  }

  return(
    <div className="container">
      <div className="spawns-container" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
        <div className="spawns">
          <h1>Spawn Locations</h1>
          <div className="buttons" id="locations">
            {spawnLocations.map((location, index) => {
              return(<Button onClick={() => {Selected(spawnLocations[index]);}} id={spawnLocations[index].id} variant="outlined" style={{marginBottom: "20px", width: "100%", color: "rgb(220, 220, 220)", borderColor: "#23ACFF"}}>{spawnLocations[index].location}</Button>)
            })}
            <Button onClick={Submit} style={{ backgroundColor: "#31C031", width: "100%" }} id="submit" variant="contained">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spawn;