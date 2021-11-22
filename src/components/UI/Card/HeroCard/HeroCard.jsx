/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import './HeroCard.css';
import {
  // ABADDON_PNG,
  HERO_AGILITY_PNG,
  HERO_INTELLIGENCE_PNG,
  HERO_STRENGTH_PNG,
} from '../../../../assets/images';

const HeroCard = props => {
  const { hero } = props;
  return (
    <Link
      className="herogridpage_HeroIcon"
      to={`/heroes/${hero.name}`}
      style={{
        backgroundImage: `url(https://api.opendota.com${hero.img})`,
      }}
    >
      <div className="herogridpage_HeroNameContainer">
        <img
          src={
            hero.primary_attr === 'str'
              ? HERO_STRENGTH_PNG
              : hero.primary_attr === 'agi'
              ? HERO_AGILITY_PNG
              : hero.primary_attr === 'int'
              ? HERO_INTELLIGENCE_PNG
              : ''
          }
          className="herogridpage_PrimaryStatIcon"
          alt=""
        />
        <div className="herogridpage_HeroName">{hero.localized_name}</div>
      </div>
      <div className="herogridpage_FadeContainer">
        <div className="fade_FadeContainer">
          <div className="fade_Fade" />
        </div>
      </div>
    </Link>
  );
};
export default HeroCard;
