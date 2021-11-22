/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import {
  ARROW__SOLID_LEFT_PNG,
  HERO_AGILITY_PNG,
  HERO_INTELLIGENCE_PNG,
  HERO_STRENGTH_PNG,
  MELEE_ATTACK_TYPE,
  RANGED_ATTACK_TYPE_SVG,
} from '../../../assets/images';

/* eslint-disable max-len */
const HeroOverViewSection = props => {
  const { heroData, previousHeroName, nextHeroName, singleHeroData } = props;
  const [hideBio, setHideBio] = useState(true);

  return (
    <div className="heroPage_UpperSection">
      <div className="heropage_BackgroundGradient" />

      {/* Side menu grid */}
      <div className="heropage_HeroNavigator">
        <Link
          className="heropage_NavigatorArrow heropage_Left"
          to={`/heroes/${previousHeroName}`}
          style={{ backgroundImage: `url(${ARROW__SOLID_LEFT_PNG})` }}
        />
        <Link className="heropage_CenterGrid" to="/heroes">
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
          <div className="heropage_GridDot" />
        </Link>
        <Link
          className="heropage_NavigatorArrow heropage_Right"
          to={`/heroes/${nextHeroName}`}
          style={{ backgroundImage: `url(${ARROW__SOLID_LEFT_PNG})` }}
        />
      </div>

      {/* Hero video Portrait */}
      <div className="heropage_HeroPortraitContainer">
        <ReactPlayer
          playing
          loop
          muted
          fallback={<div>Loading...</div>}
          className="heropage_HeroPortrait"
          url={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${heroData.name.slice(
            14,
          )}.webm`}
        />
      </div>

      {/* Hero description */}
      <div className="heropage_HeroSummary">
        <div className="heropage_HeroTypeTitle">
          <img
            src={
              heroData.primary_attr === 'str'
                ? HERO_STRENGTH_PNG
                : heroData.primary_attr === 'agi'
                ? HERO_AGILITY_PNG
                : HERO_INTELLIGENCE_PNG
            }
            alt=""
            className="heropage_PrimaryStatIcon"
          />
          <div className="heropage_PrimaryStat">
            {heroData.primary_attr === 'str'
              ? 'STRENGTH'
              : heroData.primary_attr === 'agi'
              ? 'AGILITY'
              : 'INTELLIGENCE'}
          </div>
        </div>
        <div className="heropage_HeroName">{heroData.localized_name}</div>
        <div className="heropage_HeroOneLiner">{singleHeroData.npe_desc_loc}</div>

        <div className="heropage_BioOrSummaryContainer">
          <div className={`heropage_BioContainer ${hideBio ? 'heropage_Hidden' : ''}`}>
            {ReactHtmlParser(singleHeroData.bio)}
            <div className="heropage_ShowBio" onClick={() => setHideBio(!hideBio)}>
              Close History
            </div>
          </div>

          <div className={`heropage_SummaryContainer ${hideBio ? '' : 'heropage_Hidden'}`}>
            <div className="heropage_Lore">
              {ReactHtmlParser(singleHeroData.description)}
              {/* Synthesizing <span className="Bold">extra resources</span> from each and every kill,
              Alchemist has no trouble gathering the tools needed to destroy his foes. Ambushing
              enemies with <span className="Bold">corrosive acid</span> and a host of{' '}
              <span className="Bold">unstable chemicals</span>, he battles to ensure his greedy
              escapades can remain uninterrupted. */}
              <div className="heropage_ShowBio" onClick={() => setHideBio(!hideBio)}>
                Read Full History
              </div>
            </div>

            <div>
              <div className="heropage_Title">Attack Type</div>
              <div className="heropage_AttackTypeDetail">
                <img
                  className="heropage_AttackTypeIcon"
                  src={
                    heroData.attack_type === 'Ranged' ? RANGED_ATTACK_TYPE_SVG : MELEE_ATTACK_TYPE
                  }
                  alt=""
                />
                <div className="heropage_Value">{heroData.attack_type}</div>
              </div>
            </div>

            {/* <div>
              <div className="heropage_Title">Complexity</div>
              <div className="heropage_PipContainer">
                <div className="heropage_DiamondPip heropage_Filled" />
                <div className="heropage_DiamondPip" />
                <div className="heropage_DiamondPip" />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* left Side Hero name line */}
      <div className="heropage_HeroVerticalBar">
        <img
          src={
            heroData.primary_attr === 'str'
              ? HERO_STRENGTH_PNG
              : heroData.primary_attr === 'agi'
              ? HERO_AGILITY_PNG
              : HERO_INTELLIGENCE_PNG
          }
          alt=""
          className="heropage_PrimaryStatIcon"
        />
        <div className="heropage_HeroName">{heroData.localized_name}</div>
        <div className="heropage_HeroID">{heroData.id}</div>
        <div className="heropage_Line" />
      </div>
    </div>
  );
};

export default HeroOverViewSection;
