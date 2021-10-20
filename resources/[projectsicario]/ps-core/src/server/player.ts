import { kMaxLength } from "buffer";
import PlayerManager from "../../../ts-shared/src/client/managers/player-manager";
import {CreateRandomText} from "../../../ts-shared/src/shared/functions";

const playerManager = PlayerManager.getInstance();

export const Login = (source, citizen) => {
  if (source != null) {
    if (citizen != null) {
      global.exports.oxmysql.fetch("SELECT * FROM players WHERE citizen = ?", [citizen], (result) => {
        let resultData = result[0];
        if (resultData != null) {
          playerManager.License = resultData.license;
          playerManager.CitizenId = resultData.citizen;
          playerManager.CitizenId = resultData.citizenid;
          playerManager.Steam = resultData.steam;
          playerManager.CharacterData = JSON.stringify(resultData.charinfo);
          playerManager.Money = JSON.stringify(resultData.money);
        }
      });
    }
  }
}

export const Create = (source) => {
  if (source != null) {
    const license: string = GetPlayerIdentifier(source, 1);
    const steam: string = GetPlayerIdentifier(source, 0);
    let citizen = null;
    let citizenId = null;

    global.exports.oxmysql.fetch("SELECT * FROM players WHERE 1", [], (result) => {
      if (result[0] != null) {
        for (let i = 0; i < result.length; i++) {
          citizenId = result[i].citizenid;       
        }
        citizenId = citizenId + 1;
        let found2 = false;
        while (true){
          citizen = CreateRandomText(10);
          for (let i = 0; i < result.length; i++) {
            let citizenResult = result[i].citizen;    
            if (citizenResult == citizen){
              found2 = true;
            }
          }
          if (found2 != true){
            break;
          }
        }
      }else{
        citizen = CreateRandomText(10);
        citizenId = 1
      }
      global.exports.oxmysql.insert("INSERT INTO players (steam, license, citizen, citizenid) VALUES (?, ?, ?, ?)", [steam, license, citizen, citizenId]);
    });
  }
}

export const SetCharacterMeta = (citizen, data) => {
  const c_Meta = {
    nationality: data.nationality,
    gender: data.gender,
    birthdate: data.birthdate,
    firstname: data.firstname,
    lastname: data.lastname
  }

  global.exports.oxmysql.fetch("SELECT * FROM players WHERE citizen = ?", [citizen], (result) => {
    if (result[0] != null) {
      global.exports.oxmysql.update("UPDATE players SET charactermeta = ? WHERE citizen = ?", [JSON.stringify(c_Meta), citizen]);
    }
  })
}
