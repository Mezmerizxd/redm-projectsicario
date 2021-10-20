import PlayerManager from "../../../ts-shared/src/client/managers/player-manager";
import {
  Login,
  Create
} from "./player";

const playerManager = PlayerManager.getInstance();

onNet("ps-core:Login", async() => {
  const source = (global as any).source;
  const license: string = GetPlayerIdentifier(source, 1);

  const result = await global.exports.oxmysql.fetch("SELECT * FROM players WHERE license = ?", [license], (result) => {
    const resultData = result[0];
  
    if (resultData != null) {
      Login(source, resultData.citizenid);
    }else {
      Create(source);
    }

    playerManager.isReady = true;
  });
})