import {
  Login,
  CharacterMeta
} from "./player";

onNet("ps-core:Login", () => {
  Login();
})

onNet("ps-core:SetCharacterMeta", (citizen, data) => {
  //CharacterMeta(citizen, data);
})