/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { Loader } from '../../../components';
// import { GetSingleHeroData } from '../../../utils';

const HeroAbilitySection = props => {
  const { previousHeroName, nextHeroName, heroName, singleHeroData } = props;
  const [currentAbility, setCurrentAbility] = useState({});
  // const [singleHeroData, setSingleHeroData] = useState(null);
  const cdnUrl = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react';

  useEffect(() => {
    if (singleHeroData) {
      setCurrentAbility(singleHeroData.abilites[0]);
    }
  }, [singleHeroData]);

  // useEffect(() => {
  //   setSingleHeroData(GetSingleHeroData({ heroName }));
  //   return () => setSingleHeroData(null);
  // }, []);

  return !singleHeroData &&
    singleHeroData !== null &&
    !singleHeroData.abilites &&
    !singleHeroData.abilites.length ? (
    <Loader />
  ) : (
    <div className="heropage_AbilityContainer">
      <div className="heropage_AbilityDetailsSection">
        <div className="heropage_AbilityDetailsHeader">Ability Details:</div>
      </div>
      <div className="heropage_HeroAbilities">
        {/* Left container */}
        <div className="heropage_AbilityLeft">
          <div className="heropage_VideoContainer">
            <div className="heropage_FadeUp" />
            <ReactPlayer
              playing
              loop
              muted
              fallback={<div>Loading...</div>}
              className="heropage_HeroPortrait"
              url={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/abilities/${heroName.slice(
                14,
              )}/${currentAbility.locilized_name}.webm`}
            />
          </div>

          <div className="heropage_AbilitySelector">
            {singleHeroData?.abilites.map(ability => (
              <div
                onClick={() => setCurrentAbility(ability)}
                className={`heropage_AbilitySelectable ${
                  currentAbility.locilized_name === ability.locilized_name
                    ? ''
                    : 'heropage_NotSelected'
                }  ${ability.isAgsShard ? 'heropage_Shard' : ''}  ${
                  ability.isAgs ? 'heropage_Scepter' : ''
                }`}
                style={{
                  backgroundImage: `url("${cdnUrl}/abilities/${
                    ability.imgUrl ? ability.imgUrl : ability.locilized_name
                  }.png")`,
                }}
              >
                <div
                  className="heropage_SubIcon"
                  style={{
                    backgroundImage: `url("${cdnUrl}/heroes/stats/${
                      ability.isAgsShard ? 'aghs_shard' : ability.isAgs ? 'aghs_scepter' : ''
                    }.png")`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right container        */}
        {/* <div className="heropage_AbilityRight">
          <div className="heropage_AbilityInfoContainer">
            <div className="heropage_AbilityMain">
              <img
                className="heropage_AbilityImage"
                src={`${cdnUrl}/abilities/${
                  currentAbility.imgUrl ? currentAbility.imgUrl : currentAbility.locilized_name
                }.png`}
                alt=""
              />
              <div className="heropage_AbilityInfo">
                <div className="heropage_AbilityName">{currentAbility.name}</div>
                <div className="heropage_AbilityDesc">{currentAbility.description}</div>
              </div>
            </div>

            <div className="heropage_AbilityDetails">
              <div className="heropage_GenericValues">
                <div className="heropage_Column">
                  <div className="heropage_DetailsValues">
                    {currentAbility.ability_info &&
                      currentAbility.ability_info.length &&
                      currentAbility.ability_info.map(
                        (info, index) =>
                          index % 2 === 0 && (
                            <div className="heropage_ValueElement">
                              {info.name}
                              <div className="heropage_ValueValue">{info.value}</div>
                            </div>
                          ),
                      )}
                  </div>
                </div>
                <div className="heropage_Column">
                  <div className="heropage_DetailsValues">
                    {currentAbility.ability_info &&
                      currentAbility.ability_info.length &&
                      currentAbility.ability_info.map(
                        (info, index) =>
                          index % 2 !== 0 && (
                            <div className="heropage_ValueElement">
                              {info.name}:<div className="heropage_ValueValue">{info.value}</div>
                            </div>
                          ),
                      )}
                  </div>
                </div>
              </div>
              <div className="heropage_SpecificValues">
                {currentAbility.ability_stats &&
                  currentAbility.ability_stats.length &&
                  currentAbility.ability_stats.map(info => (
                    <div className="heropage_SpecialElement">
                      {info.name} :<div className="heropage_SpecialValue">{` ${info.value}`}</div>
                    </div>
                  ))}
              </div>

              <div className="heropage_BottomValues">
                {currentAbility.cooldown && (
                  <div className="heropage_CooldownContainer">
                    <div
                      className="heropage_CooldownIcon"
                      style={{
                        backgroundImage: `url("${cdnUrl}/icons/cooldown.png")`,
                      }}
                    />
                    <div className="heropage_CooldownText">{currentAbility.cooldown}</div>
                  </div>
                )}
                {currentAbility.mana_cost && (
                  <div className="heropage_ManaContainer">
                    <div className="heropage_ManaIcon" />
                    <div className="heropage_ManaText">{currentAbility.mana_cost}</div>
                  </div>
                )}
              </div>
              <div className="heropage_Lore">{currentAbility.trivia_description}</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom navigation */}
      <div className="heropage_BottomSectionHero">
        <Link
          className="heropage_BottomSectionHero heropage_Left"
          to={`/heroes/${previousHeroName}`}
          style={{
            backgroundImage: `url("${cdnUrl}/backgrounds/grey_painterly_wide.png")`,
          }}
        >
          <img
            className="heropage_HeroPortrait"
            src={`${cdnUrl}/heroes/crops/${previousHeroName.slice(14)}.png`}
            alt=""
          />
          {/* <div className="heropage_HeroLabels">
            <div className="heropage_TopHeader">Previous Hero</div>
            <div className="heropage_Name">Abaddon</div>
            <div className="heropage_Details">
              <img
                src="${cdnUrl}/icons/hero_strength.png"
                className="heropage_PrimaryStatIcon"
                alt=""
              />
              <div className="heropage_AttackType">Melee</div>
            </div>
          </div> */}
        </Link>

        <Link className="heropage_AllHeroesContainer" to="/heroes">
          <div className="heropage_Boxes">
            <div className="heropage_Box" />
            <div className="heropage_Box" />
            <div className="heropage_Box" />
            <div className="heropage_Box" />
            <div className="heropage_Box" />
            <div className="heropage_Box" />
          </div>
          <div className="heropage_AllHeroesLabel">All Heroes </div>
        </Link>

        <Link
          className="heropage_BottomSectionHero heropage_Right"
          to={`/heroes/${nextHeroName}`}
          style={{
            backgroundImage: `url("${cdnUrl}/backgrounds/grey_painterly_wide.png")`,
          }}
        >
          <img
            className="heropage_HeroPortrait"
            src={`${cdnUrl}/heroes/crops/${nextHeroName.slice(14)}.png`}
            alt=""
          />
          {/* <div className="heropage_HeroLabels">
            <div className="heropage_TopHeader">Next Hero</div>
            <div className="heropage_Name">Ancient Apparition</div>
            <div className="heropage_Details">
              <img
                src="${cdnUrl}/icons/hero_intelligence.png"
                className="heropage_PrimaryStatIcon"
                alt=""
              />
              <div className="heropage_AttackType">Ranged</div>
            </div>
          </div> */}
        </Link>
      </div>
    </div>
  );
};

export default HeroAbilitySection;
