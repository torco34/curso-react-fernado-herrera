import Heroes from "../array/Heroes";

export const getHeroesId = (id) => Heroes.find((Heroe) => Heroe.id === id);
export const getaplelido = (descript) =>
  Heroes.filter((Heroe) => Heroe.descript === id);
