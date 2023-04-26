import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle, wallet2Toggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";

const Header = ({ walletToggle,wallet2Toggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              {/* <img src="/img/logo2.png" alt="" /> */}
                  <img src="/img/shinnextream.png" width="100px" alt="" />
            </div>

          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/#home">
                  <a className="creative_link">HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="creative_link">ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href="/#upcoming_projects">
                  <a className="creative_link">UPCOMING PROJECTS</a>
                </Link>
              </li>
              <li>
                <Link href="/#shinnextream">
                  <a className="creative_link">SHINNEXTREAM</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="wallet" style={{display:"flex"}}>
              
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                wallet2Toggle(true);
              }}
              className="metaportal_fn_button wallet2_opener"
            >
              <img src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg" width="52px" alt="" />
              
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                walletToggle(true);
              }}
              className="metaportal_fn_button wallet_opener"
            >
              
              <span>Donate</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle,wallet2Toggle, navigationToggle })(
  Header
);
