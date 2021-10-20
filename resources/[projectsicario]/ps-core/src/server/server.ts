import { kMaxLength } from "buffer";
import PlayerManager from "../../../ts-shared/src/client/managers/player-manager";
import {
  Login,
  Create,
  SetCharacterMeta
} from "./player";

const playerManager = PlayerManager.getInstance();

setImmediate(() => {

})

onNet("ps-core:Login", () => {
  const source = (global as any).source;
  const license: string = GetPlayerIdentifier(source, 1);

  global.exports.oxmysql.fetch("SELECT * FROM players WHERE license = ?", [license], (result) => {
    const resultData = result[0];
    if (resultData != null) {
      Login(source, resultData.citizen);
    }else {
      Create(source);
    }
    playerManager.isReady = true;
  });
})

onNet("ps-core:CreateCharacter", () => {

})