import PlayerManager from "../../../ts-shared/src/client/managers/player-manager";
import {CreateRandomText} from "../../../ts-shared/src/shared/functions";

const playerManager = PlayerManager.getInstance();

export const Login = () => {
  const source = (global as any).source;
  const license: string = GetPlayerIdentifier(source, 1);

  global.exports.oxmysql.fetch("SELECT * FROM players WHERE license = ?", [license], (result) => {
    const resultData = result[0];
    if (resultData != null) {
      if (resultData.citizen != null) {
        global.exports.oxmysql.fetch("SELECT * FROM players WHERE citizen = ?", [resultData.citizen], (result2) => {
          let resultData2 = result2[0];
          if (resultData != null) {
            playerManager.License = resultData2.license;
            playerManager.Citizen = resultData2.citizen;
            playerManager.CitizenId = resultData2.citizenid;
            playerManager.Steam = resultData2.steam;
            playerManager.CharacterMeta = JSON.stringify(resultData2.charactermeta);
            playerManager.Money = JSON.stringify(resultData2.money);
            playerManager.isReady = true;
          }
        });
      }
    }
    else {
      Create(source);
    }
  });
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
      playerManager.isReady = true;
    });
  }
}

export const CharacterMeta = (citizen?, data?) => {
  console.log(data);
  if (data != null) { // Set
    let c_Meta = {
      nationality: data.nationality,
      gender: data.gender,
      birthdate: data.birthdate,
      firstname: data.firstname,
      lastname: data.lastname
    }
    global.exports.oxmysql.fetch("SELECT * FROM players WHERE citizen = ?", [citizen], (result) => {
      if (result[0] != null) {
        console.log(data);
        global.exports.oxmysql.execute("UPDATE players SET charactermeta = ? WHERE citizen = ?", [JSON.stringify(c_Meta), citizen]);
        playerManager.CharacterMeta = c_Meta;
      }
    })
  }else { // Get
    global.exports.oxmysql.fetch("SELECT * FROM players WHERE citizen = ?", [citizen], (result) => {
      let resultData = result[0];
      if (resultData != null) {
        let c_Meta = {
          nationality: resultData.charactermeta.nationality,
          gender: resultData.charactermeta.gender,
          birthdate: resultData.charactermeta.birthdate,
          firstname: resultData.charactermeta.firstname,
          lastname: resultData.charactermeta.lastname
        }
        return c_Meta;
      }
    })

  }
}
