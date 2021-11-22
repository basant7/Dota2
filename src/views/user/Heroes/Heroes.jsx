/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Heroes.css';
import {
  FILTER_STR_ACTIVE_PNG,
  FILTER_AGI_ACTIVE_PNG,
  FILTER_INT_ACTIVE_PNG,
  // FILTER_DIAMOND_PNG,
  SEARCH_SVG,
} from '../../../assets/images';
import { HeroCard, Loader, NoDataFound } from '../../../components';
import { getAllHeroesListSaga } from '../../../store/actions';

const Heroes = () => {
  const dispatch = useDispatch();
  const [attributeType, setAttributeType] = useState('');
  // const [isComplexFilterActive, setIsComplexFilterActive] = useState({ isActive: false, value: 0 });
  const [filterHeroesList, setFilterHeroesList] = useState(null);
  const [heroSearch, setHeroSearch] = useState('');
  const { heroesList } = useSelector(state => state.hero);

  useEffect(() => {
    if (attributeType || heroSearch) {
      if (heroSearch) {
        if (attributeType === 'STR') {
          setFilterHeroesList(
            heroesList.filter(
              hero =>
                hero.primary_attr === 'str' &&
                hero.localized_name.toLowerCase().startsWith(heroSearch.toLowerCase()),
            ),
          );
        } else if (attributeType === 'AGI') {
          setFilterHeroesList(
            heroesList.filter(
              hero =>
                hero.primary_attr === 'agi' &&
                hero.localized_name.toLowerCase().startsWith(heroSearch.toLowerCase()),
            ),
          );
        } else if (attributeType === 'INT') {
          setFilterHeroesList(
            heroesList.filter(
              hero =>
                hero.primary_attr === 'int' &&
                hero.localized_name.toLowerCase().startsWith(heroSearch.toLowerCase()),
            ),
          );
        } else {
          setFilterHeroesList(
            heroesList.filter(hero =>
              hero.localized_name.toLowerCase().startsWith(heroSearch.toLowerCase()),
            ),
          );
        }
      } else if (attributeType === 'STR') {
        setFilterHeroesList(heroesList.filter(hero => hero.primary_attr === 'str'));
      } else if (attributeType === 'AGI') {
        setFilterHeroesList(heroesList.filter(hero => hero.primary_attr === 'agi'));
      } else if (attributeType === 'INT') {
        setFilterHeroesList(heroesList.filter(hero => hero.primary_attr === 'int'));
      }
    } else {
      setFilterHeroesList(heroesList);
    }
  }, [heroesList, attributeType, heroSearch]);
  useEffect(() => {
    dispatch(getAllHeroesListSaga());
  }, []);

  return (
    <div className="heroes-page-main-container">
      <div className="herogridpage_Header">
        <div className="herogridpage_Trapezoid" />
        <div className="herogridpage_TitleText">Choose Your Hero</div>
        <div className="herogridpage_SubtitleText">
          From magical tacticians to fierce brutes and cunning rogues, Dota 2&apos;s hero pool is
          massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on
          your way to victory.
        </div>
      </div>

      {/* Filter */}
      <div className="herogridpage_FilterContainer">
        <div className="herogridpage_FilterLabel">Filter Heroes</div>
        <div className="herogridpage_SpecificFilterContainer">
          <div className="herogridpage_SelectorLabel">Attribute</div>
          <div
            className={`herogridpage_Filter ${attributeType === 'STR' ? `selected` : ''}`}
            style={{
              backgroundImage: `url(${FILTER_STR_ACTIVE_PNG})`,
            }}
            onClick={() =>
              setAttributeType(currentSelectedAttribute =>
                currentSelectedAttribute === 'STR' ? '' : 'STR',
              )
            }
          />
          <div
            className={`herogridpage_Filter ${attributeType === 'AGI' ? `selected` : ''}`}
            style={{
              backgroundImage: `url(${FILTER_AGI_ACTIVE_PNG})`,
            }}
            onClick={() =>
              setAttributeType(currentSelectedAttribute =>
                currentSelectedAttribute === 'AGI' ? '' : 'AGI',
              )
            }
          />
          <div
            className={`herogridpage_Filter ${attributeType === 'INT' ? `selected` : ''}`}
            style={{
              backgroundImage: `url(${FILTER_INT_ACTIVE_PNG})`,
            }}
            onClick={() =>
              setAttributeType(currentSelectedAttribute =>
                currentSelectedAttribute === 'INT' ? '' : 'INT',
              )
            }
          />
        </div>
        {/* <div className="herogridpage_SpecificFilterContainer">
          <div className="herogridpage_SelectorLabel">Complexity</div>
          <div
            className={`herogridpage_Filter ${
              isComplexFilterActive.value === 1 ||
              isComplexFilterActive.value === 2 ||
              isComplexFilterActive.value === 3
                ? isComplexFilterActive.isActive
                  ? `selected`
                  : ''
                : ''
            }`}
            style={{
              backgroundImage: `url(${FILTER_DIAMOND_PNG})`,
            }}
            onClick={() =>
              setIsComplexFilterActive({
                isActive:
                  isComplexFilterActive.value !== 1 ? true : !isComplexFilterActive.isActive,
                value: 1,
              })
            }
          />
          <div
            className={`herogridpage_Filter ${
              isComplexFilterActive.value === 2 || isComplexFilterActive.value === 3
                ? isComplexFilterActive.isActive
                  ? `selected`
                  : ''
                : ''
            }`}
            style={{
              backgroundImage: `url(${FILTER_DIAMOND_PNG})`,
            }}
            onClick={() =>
              setIsComplexFilterActive({
                isActive:
                  isComplexFilterActive.value !== 2 ? true : !isComplexFilterActive.isActive,
                value: 2,
              })
            }
          />
          <div
            className={`herogridpage_Filter ${
              isComplexFilterActive.value === 3 && isComplexFilterActive.isActive ? `selected` : ''
            }`}
            style={{
              backgroundImage: `url(${FILTER_DIAMOND_PNG})`,
            }}
            onClick={() =>
              setIsComplexFilterActive({
                isActive:
                  isComplexFilterActive.value !== 3 ? true : !isComplexFilterActive.isActive,
                value: 3,
              })
            }
          />
        </div> */}
        <div className="herogridpage_SearchBarContainer">
          <div className="herogridpage_SearchBar">
            <div
              className="herogridpage_MagnifyingGlass"
              style={{ backgroundImage: `url(${SEARCH_SVG})` }}
            />
            <form onSubmit={e => e.preventDefault()}>
              <input type="text" onChange={e => setHeroSearch(e.target.value)} />
            </form>
          </div>
        </div>
      </div>

      {/* Heros Grid */}
      {/* <div className="herogridpage_StateLoading">Loading...</div>
      <div className="herogridpage_NoHeroes">No Heroes match your filter</div> */}
      {filterHeroesList ? (
        filterHeroesList.length ? (
          <div className="herogridpage_GridList">
            {filterHeroesList.map(hero => (
              <HeroCard hero={hero} key={hero.id} />
            ))}
          </div>
        ) : (
          <NoDataFound text="No Heroes found" />
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Heroes;
