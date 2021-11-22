import { Link } from 'react-router-dom';
import { HOME_SECOND_PAGE_BG_JPG } from '../../../assets/images';

const SecondPage = () => (
  <div className="home-second-page">
    <div className="homepage_BattleBG">
      <img className="homepage_BattleImg" src={HOME_SECOND_PAGE_BG_JPG} alt="" />
      <div className="fade_FadeContainer fade_Top">
        <div className="fade_Fade" />
      </div>
    </div>

    {/* Second Page Text */}
    <div className="homepage_LeftHalf">
      <div
        className="homepage_HeaderText aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <span className="Minor">Join the</span>
        <span className="Major">
          <br />
          Battle of the Ancients
        </span>
      </div>

      <div className="homepage-horizonBar" />

      <div className="homepage_BodyText">
        Every day, millions of players worldwide enter the battle as one of over a hundred Dota
        Heroes in a 5v5 team clash. Dota is the deepest multi-player action RTS game ever made and
        there&apos;s always a new strategy or tactic to discover. It&apos;s completely free to play
        and always will be – start defending your ancient now.
        <Link to="/home">
          <div className="homepage_StandardButton">
            <div className="homepage_ButtonText">See What&apos;s New</div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);
export default SecondPage;
