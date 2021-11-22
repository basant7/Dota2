/* eslint-disable max-len */
import {
  HERO_AGILITY_PNG,
  HERO_INTELLIGENCE_PNG,
  HERO_STRENGTH_PNG,
  ICON_ARMOR_PNG,
  ICON_ATTACK_RANGE_PNG,
  ICON_ATTACK_TIME_PNG,
  ICON_DAMAGE_PNG,
  ICON_MAGIC_RESIST_PNG,
  ICON_MOVEMENT_SPEED_PNG,
  ICON_PROJECTILE_SPEED_PNG,
  ICON_TURN_RATE_PNG,
  ICON_VISION_PNG,
} from '../../../assets/images';

const HeroStatsSection = props => {
  // eslint-disable-next-line no-unused-vars
  const { heroData, singleHeroData } = props;

  return (
    <div className="heropage_DetailsBarContainer">
      <div className="heropage_DetailsBar">
        <div className="heropage_DetailsAttributes">
          <div className="heropage_TopAttributesSection">
            <div className="heropage_PortraitContainer">
              <img
                className="heropage_Portrait"
                src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroData.name.slice(
                  14,
                )}.png`}
                alt=""
              />
              <div className="heropage_HealthBar">
                <div className="heropage_BarNumberMajor">{heroData.health}</div>
                <div className="heropage_BarNumberMinor">+{heroData.health_regen.toFixed(1)}</div>
              </div>
              <div className="heropage_ManaBar">
                <div className="heropage_BarNumberMajor">{heroData.mana}</div>
                <div className="heropage_BarNumberMinor">+{heroData.mana_regen.toFixed(1)}</div>
              </div>
            </div>
            <div className="heropage_AttributesContainer">
              <div className="heropage_SingleAttributeContainer">
                <img className="heropage_AttributeIcon" src={HERO_STRENGTH_PNG} alt="" />
                <div className="heropage_AttributeValue">{heroData.base_str}</div>
                <div className="heropage_AttributeGain">+{heroData.str_gain}</div>
              </div>
              <div className="heropage_SingleAttributeContainer">
                <img className="heropage_AttributeIcon" src={HERO_AGILITY_PNG} alt="" />
                <div className="heropage_AttributeValue">{heroData.base_agi}</div>
                <div className="heropage_AttributeGain">+{heroData.agi_gain}</div>
              </div>
              <div className="heropage_SingleAttributeContainer">
                <img className="heropage_AttributeIcon" src={HERO_INTELLIGENCE_PNG} alt="" />
                <div className="heropage_AttributeValue">{heroData.base_int}</div>
                <div className="heropage_AttributeGain">+{heroData.int_gain}</div>
              </div>
            </div>
          </div>
          <div className="heropage_DetailsSectionHeader">Attributes</div>
        </div>

        <div className="heropage_VerticalSeperator" />

        <div className="heropage_DetailsRoles">
          <div className="heropage_RolesList">
            <div className="heropage_Role">
              <div className="heropage_RoleName">Carry</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[0] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Support</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[1] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Nuker</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[2] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Disabler</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[3] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Jungler</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[4] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Durable</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[5] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Escape</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[6] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Pusher</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[7] * 33.3}%` }}
                />
              </div>
            </div>
            <div className="heropage_Role">
              <div className="heropage_RoleName">Initiator</div>
              <div className="heropage_BarContainer">
                <div className="heropage_BarBackground" />
                <div
                  className="heropage_BarFilled"
                  style={{ width: `${singleHeroData.role_levels[8] * 33.3}%` }}
                />
              </div>
            </div>
          </div>

          <div className="heropage_DetailsSectionHeader">Roles</div>
        </div>

        <div className="heropage_VerticalSeperator" />

        <div className="heropage_DetailsStats">
          <div className="heropage_StatsList">
            <div className="heropage_HeroValuesSection">
              <div className="heropage_HeroValueTitle">Attack</div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_DAMAGE_PNG} alt="" />
                {`${heroData.attack_damage.min}-${heroData.attack_damage.max}`}
              </div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_ATTACK_TIME_PNG} alt="" />
                {heroData.attack_rate.toFixed(1)}
              </div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_ATTACK_RANGE_PNG} alt="" />
                {heroData.attack_range}
              </div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_PROJECTILE_SPEED_PNG} alt="" />
                {heroData.projectile_speed}
              </div>
            </div>
            <div className="heropage_HeroValuesSection">
              <div className="heropage_HeroValueTitle">Defense</div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_ARMOR_PNG} alt="" />
                {heroData.armor.toFixed(1)}
              </div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_MAGIC_RESIST_PNG} alt="" />
                {heroData.base_mr}%
              </div>
            </div>
            <div className="heropage_HeroValuesSection">
              <div className="heropage_HeroValueTitle">Mobility</div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_MOVEMENT_SPEED_PNG} alt="" />
                {heroData.move_speed}
              </div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_TURN_RATE_PNG} alt="" />
                0.6
              </div>
              <div className="heropage_ValueElement">
                <img className="heropage_SwordIcon" src={ICON_VISION_PNG} alt="" />
                1800 / 800
              </div>
            </div>
          </div>
          <div className="heropage_DetailsSectionHeader">Stats</div>
        </div>
      </div>
    </div>
  );
};

export default HeroStatsSection;
