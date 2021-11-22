/* eslint-disable max-len */
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { STEAM_ICON_SVG } from '../../../assets/images';

const FirstPage = () => (
  <div className="home-first-page">
    <div className="home-video-container">
      <ReactPlayer
        playing
        loop
        muted
        playsinline
        url="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_webm.webm"
        width="100%"
        height="100%"
        style={{ opacity: 0.7 }}
      />
    </div>
    <div className="home-first-page-left">
      <div className="main-quote">
        <div className="main-quote-text">“A MODERN MULTIPLAYER MASTERPIECE.”</div>
        <div className="main-quote-author">- DESTRUCTOID</div>
        <div className="homepage-horizonBar" />
      </div>
      <a href="https://www.dota2.com/store" target="_blank" className="steam-play" rel="noreferrer">
        <img src={STEAM_ICON_SVG} alt="" />
        <div className="steam-play-right">
          <div className="text">Play for Free</div>
          <div className="download">Download on Steam</div>
        </div>
      </a>
    </div>
    <div className="home-first-page-right">
      <div className="home-news-container">
        <div className="news-top">
          <div className="latest-news">Latest News</div>
          {/* <Link to="/home">View All</Link>
          <img className="homePage-right-arrow" src={ARROW_LEFT_PNG} alt="" /> */}
        </div>

        <div className="news-component-conatiner">
          <Link className="blogcapsule-BlogCapsule" to="/news">
            <div
              className="blogcapsule-Entry"
              style={{
                backgroundImage:
                  'url(https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/e5a57f7b21063e63c40a4073903fe02560ebe95c.png)',
              }}
            >
              <div className="fade-FadeContainer-1JDI3 fade-Bottom-1NXAh">
                <div className="fade-Fade" />
              </div>
              <div className="blogcapsule-Desc">
                New Hero, New Treasure and 7.30e Gameplay Update.
              </div>
              <div className="blogcapsule-Title">Marci Marches In</div>
              <div className="blogcapsule-Date">October 29, 2021</div>
            </div>
          </Link>
          {/* Second News Container */}
          <Link className="blogcapsule-BlogCapsule" to="/news">
            <div
              className="blogcapsule-Entry"
              style={{
                backgroundImage:
                  'url("https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/7c5a93d3e497813ba9065b2a32d0b14f071a1217.png")',
              }}
            >
              <div className="fade-FadeContainer-1JDI3 fade-Bottom-1NXAh">
                <div className="fade-Fade" />
              </div>
              <div className="blogcapsule-Desc">
                The International Main Event kicks off at National Arena in Bucharest in less than
                twelve hours. Tune in from 10 am EEST via the DPC website, the Dota client, or over
                on Twitch.
              </div>
              <div className="blogcapsule-Title">The International Main Event</div>
              <div className="blogcapsule-Date">October 12, 2021</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default FirstPage;
