import {Vector4} from "../../../ts-shared/src/shared/vectors";

class Config {
  protected static instance: Config;

  static getInstance() {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  } 

  public PedCoords = Vector4(-171.3201, 626.3724, 114.0321, 236.02377319336);
  public CamCoords = Vector4(0, 0, 0, 0);

  public SpawnLocations = [
    {
      id: "valentine",
      location: "Valentine",
      coords: {
        x: -171.3201,
        y: 626.3724,
        z: 114.0321,
      }
    },
    {
      id: "strawberry",
      location: "Strawberry",
      coords: {
        x: -1819.991,
        y: -371.6578,
        z: 166.5049,
      }
    },
    {
      id: "blackwater",
      location: "Blackwater",
      coords: {
        x: -724.5617,
        y: -1243.094,
        z: 44.7341,
      }
    }
  ]
}

export default Config;