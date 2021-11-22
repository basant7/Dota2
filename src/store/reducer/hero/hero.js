/* eslint-disable no-case-declarations */
import * as actionLabels from '../../actionLabels';

const initialState = {
  isLoading: false,
  heroesList: null,
  filterHeroesList: null,
  heroData: null,
  previousHeroName: null,
  nextHeroName: null,
  errorMsg: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case actionLabels.GET_ALL_HEROES_LIST_START:
      return { ...state, isLoading: true };
    case actionLabels.GET_ALL_HEROES_LIST_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const payloadArray = Object.values(payload);
      return {
        ...state,
        isLoading: false,
        heroesList: payloadArray,
      };
    case actionLabels.GET_ALL_HEROES_LIST_FAIL:
      return { ...state, isLoading: false, errorMsg: payload };
    case actionLabels.FILTER_HEROES_LIST:
      return {
        ...state,
        filterHeroesList: payload,
      };
    case actionLabels.GET_HERO_DATA_START:
      return { ...state, isLoading: true };
    case actionLabels.GET_HERO_DATA_SUCCESS:
      let updatedprviousHeroName = null;
      let updatednextHeroName = null;
      const heroDataArray = Object.keys(payload.data);
      if (heroDataArray.indexOf(payload.heroName) !== -1) {
        if (heroDataArray.indexOf(payload.heroName) === 0) {
          updatedprviousHeroName = heroDataArray[heroDataArray.length - 1];
        } else {
          updatedprviousHeroName = heroDataArray[heroDataArray.indexOf(payload.heroName) - 1];
        }
      }
      if (heroDataArray.indexOf(payload.heroName) !== -1) {
        if (heroDataArray.indexOf(payload.heroName) === heroDataArray.length - 1) {
          // eslint-disable-next-line prefer-destructuring
          updatednextHeroName = heroDataArray[0];
        } else {
          updatednextHeroName = heroDataArray[heroDataArray.indexOf(payload.heroName) + 1];
        }
      }

      return {
        ...state,
        isLoading: false,
        heroData: {
          ...payload.data[payload.heroName],
          health:
            payload.data[payload.heroName].base_health +
            payload.data[payload.heroName].base_str * 20,
          health_regen:
            payload.data[payload.heroName].base_health_regen +
            payload.data[payload.heroName].base_str * 0.1,
          mana:
            payload.data[payload.heroName].base_mana + payload.data[payload.heroName].base_int * 12,
          mana_regen:
            payload.data[payload.heroName].base_mana_regen +
            payload.data[payload.heroName].base_int * 0.05,
          attack_damage: {
            min:
              payload.data[payload.heroName].base_attack_min +
              payload.data[payload.heroName][
                `base_${payload.data[payload.heroName].primary_attr}`
              ] *
                1,
            max:
              payload.data[payload.heroName].base_attack_max +
              payload.data[payload.heroName][
                `base_${payload.data[payload.heroName].primary_attr}`
              ] *
                1,
          },
          armor:
            payload.data[payload.heroName].base_armor +
            payload.data[payload.heroName].base_agi * 0.167,
        },
        previousHeroName: updatedprviousHeroName,
        nextHeroName: updatednextHeroName,
      };
    case actionLabels.GET_HERO_DATA_FAIL:
      return { ...state, isLoading: false, errorMsg: payload };
    case actionLabels.RESET_HERO_DATA:
      return { ...state, heroData: null, previousHeroName: null, nextHeroName: null };
    default:
      return state;
  }
}
