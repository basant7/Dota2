/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

// import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DOTA2_LOGO_HORIZ_PNG, STEAM_ICON_SVG } from '../../assets/images';

const Layout = props => {
  const { children } = props;
  // const [showDropDown, setShowDropDown] = useState(false);
  return (
    <>
      <nav className="navbar-main">
        <Link to="/home" class="dota-logo">
          <img src={DOTA2_LOGO_HORIZ_PNG} alt="Dota 2 Logo" className="dota-logo hover-ob1" />
        </Link>
        {/* <img src={DOTA2_LOGO_SYMBOL_PNG} alt="Dota 2 Logo" className="dota-logo small" /> */}
        <Dropdown style={{ zIndex: '100000' }}>
          <Dropdown.Toggle
            className="d-flex align-items-center"
            id="dropdown-basic"
            style={{ background: 'transparent', borderColor: 'transparent', opacity: 0.8 }}
          >
            <h2>Game</h2>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="https://www.dota2.com/store" target="_blank" rel="noreferrer">
              Store
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/home" disabled>
              Patches
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/home" disabled>
              News
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="navbar-navitems">
          <div>
            <Link to="/heroes">
              <h2 className="nav-item hover-ob1">Heroes</h2>
            </Link>
          </div>
          <div>
            {/* <Link to="/" disabled>
              <h2 className="nav-item hover-ob1">News</h2>
            </Link> */}
          </div>
        </div>

        <a
          href="https://www.dota2.com/store"
          className="navbar-login"
          target="_blank"
          rel="noreferrer"
        >
          {/* <h3 className="hover-ob1">Login</h3> */}
          <div className="steam-play-for-free mt-3">
            <img src={STEAM_ICON_SVG} alt="" />
            <div className="steam-button">Play for Free</div>
          </div>
        </a>
      </nav>
      <div className="main-content-container">{children}</div>
      {/* Footer */}
      <div className="rootfooter_RootFooter">
        <div className="rootfooter_Logos">
          <a href="https://www.valvesoftware.com/en/about" target="_blank" rel="noreferrer">
            <img
              className="rootfooter_FooterLogo"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"
              alt=""
            />
          </a>
          <Link href="/home">
            <img
              className="rootfooter_FooterLogo"
              src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="rootfooter_Legal">
          Dota and the Dota logo are trademarks and/or registered trademarks of Valve Corporation.
          2021 Valve Corporation, all rights reserved.
        </div>
      </div>
    </>
  );
};

export default Layout;
