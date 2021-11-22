import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Loader } from '../../../components';
import { getHeroDataSaga, resetHeroData } from '../../../store/actions';
import { GetSingleHeroData } from '../../../utils';
import HeroAbilitySection from './HeroAbilitySection';
import HeroOverViewSection from './HeroOverviewSection';
import HeroStatsSection from './HeroStatsSection';
import './SingleHero.css';

const SingleHero = () => {
  const [singleHeroData, setSingleHeroData] = useState(null);
  const dispatch = useDispatch();
  const { heroName } = useParams();
  const { heroData, previousHeroName, nextHeroName } = useSelector(state => state.hero);

  useEffect(() => {
    dispatch(getHeroDataSaga({ heroName }));
    setSingleHeroData(GetSingleHeroData({ heroName }));
    return () => dispatch(resetHeroData());
  }, [heroName]);

  return !heroData ? (
    <Loader />
  ) : (
    <>
      {/* ----------------Hero Overview------------- */}
      <HeroOverViewSection
        heroData={heroData}
        previousHeroName={previousHeroName}
        nextHeroName={nextHeroName}
        singleHeroData={singleHeroData}
      />

      {/* ----------------Hero Stats------------- */}
      <HeroStatsSection heroData={heroData} singleHeroData={singleHeroData} />

      {/* ----------------Heroes ability section---------------- */}
      <HeroAbilitySection
        previousHeroName={previousHeroName}
        nextHeroName={nextHeroName}
        heroName={heroName}
        singleHeroData={singleHeroData}
      />
    </>
  );
};
export default SingleHero;
