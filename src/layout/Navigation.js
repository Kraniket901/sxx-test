import Link from "next/link";
import { Fragment, useState } from "react";
import {GrInstagram} from 'react-icons/gr';
import {FiLogIn} from 'react-icons/fi';
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
const Navigation = ({ navigation, navigationToggle }) => {
  const [subMenu, setSubMenu] = useState(null);
  return (
    <Fragment>
      <div
        onClick={() => navigationToggle(false)}
        className={`metaportal_fn_leftnav_closer ${navigation ? "active" : ""}`}
      />
      <div className={`metaportal_fn_leftnav ${navigation ? "active" : ""}`}>
        <a
          href="#"
          className="fn__closer"
          onClick={() => navigationToggle(false)}
        >
          <span />
        </a>
        <div className="navbox">
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a
                    href="https://www.instagram.com/shinnex_production/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    <GrInstagram/>
                  </span>
                  <span className="text">Instagram</span>
                </div>
              </li>
              <li>
                {/* <div className="item">
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <span className="icon">
                    
                    <FiLogIn/>
                  </span>
                  <span className="text">Login</span>
                </div> */}
              </li>
            </ul>
          </div>
          <div className="nav_holder">
            {/* For JS */}
            <span className="icon">
              <img src="/svg/down.svg" alt="" className="fn__svg" />
            </span>
            {/* For JS */}
            <ul
              style={{
                transform: `translateX(${subMenu !== null ? "-100" : "0"}%)`,
              }}
            >
              <li>
                <Link href="#">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Home</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">About</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#upcoming_projects">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Upcoming Projects</span>
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSubMenu("pages");
                  }}
                  className={`${subMenu == "pages" ? "active" : ""}`}
                >
                  <span className="creative_link">
                    Shinnextream
                    <img src="/svg/down.svg" alt="" className="fn__svg" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a
                      href="#shinnextream"
                      className="prev"
                      onClick={() => setSubMenu(null)}
                    >
                      <span className="creative_link">
                        <img src="/svg/down.svg" alt="" className="fn__svg" />
                        Shinnextream
                      </span>
                    </a>
                  </li>

                  <li>
                    <Link href="#shinnextream">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">About</span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#voice_artists">
                      <a onClick={() => navigationToggle(false)}>
                        <span className="creative_link">Voice Artists</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#donation">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Donation</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#avatars">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Our Avatars</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a onClick={() => navigationToggle(false)}>
                    <span className="creative_link">Contact</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="info_holder">
            <div className="copyright">
              <p>
                Copyright 2023 - Designed &amp; Developed by{" "}
                <a
                  href="https://themeforest.net/user/codeefly/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Aniket
                </a>
              </p>
            </div>
            <div className="social_icons">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/facebook-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/instagram-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/pinterest-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="/svg/social/behance-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});
export default connect(mapStateToProps, { navigationToggle })(Navigation);
