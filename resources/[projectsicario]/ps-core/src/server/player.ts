import PlayerManager from "../../../ts-shared/src/client/managers/player-manager";

const playerManager = PlayerManager.getInstance();

export const Login = (source, citizenid) => {
  if (source != null) {
    if (citizenid != null) {
      global.exports.oxmysql.fetch("SELECT * FROM players WHERE citizenid = ?", [citizenid], (result) => {
        let resultData = result[0];
        if (resultData != null) {
          playerManager.License = resultData.license;
          playerManager.CitizenId = resultData.citizenid;
          playerManager.Cid = resultData.cid;
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

    const citizenid: string = "ABC123DEF";

    global.exports.oxmysql.insert("INSERT INTO players (citizenid, license, steam) VALUES (?, ?, ?)", [citizenid, license, steam]);
  }
}

