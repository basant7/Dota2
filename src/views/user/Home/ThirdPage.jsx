import { Link } from 'react-router-dom';

/* eslint-disable max-len */
const ThirdPage = () => (
  <div className="home-third-page">
    <div className="fade_FadeContainer">
      <div className="fade_Fade" />
    </div>

    <div className="homepage_HeaderText third-page-header-text">
      <span className="Minor">Who Will You</span>
      <span className="Major">
        <br />
        Choose?
      </span>
    </div>

    <div className="homepage-horizonBar" />

    <div className="homepage_BodyText" style={{ filter: `brightness(2)` }}>
      From magical tacticians to fierce brutes and cunning rogues, Dota 2&apos;s hero pool is
      massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on
      your way to victory.
      <Link to="/heroes">
        <div className="homepage_StandardButton">
          <div className="homepage_ButtonText">View All Heroes</div>
        </div>
      </Link>
    </div>
  </div>
);
export default ThirdPage;
