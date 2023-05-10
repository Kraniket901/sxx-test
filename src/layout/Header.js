import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";

const Header = ({ walletToggle, navigationToggle }) => {
  const { data: session, status } = useSession();
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
              <img src="/img/shinnextream.webp" width="100px" alt="" />
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/">
                  <a className="creative_link">HOME</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="creative_link">ABOUT</a>
                </Link>
              </li>
              <li>
                <Link href="/#shinnextream">
                  <a className="creative_link">SHINNEXTREAM</a>
                </Link>
              </li>
              <li>
                <Link href="/#anime_poll">
                  <a className="creative_link">ANIME POLL</a>
                </Link>
              </li>
              <li>
                <Link href="/#donation">
                  <a className="creative_link">DONATION</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="creative_link">CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="wallet" style={{ display: "flex" }}>
            {status === "authenticated" && (
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  walletToggle(true);
                }}
                className="wallet_opener"
              >
                <img src={session.user.image} width="52px" alt="" />
              </a>
            )}
            {status === "unauthenticated" && (
              <Button className="loginBtn" color="secondary" auto onClick={() => signIn("google")}>
                <a
                  style={{
                    fontFamily: "font1",
                    fontSize: "18px",
                    padding: "1rem 2rem",
                  }}
                  className="wallet_opener"
                >
                  Login
                </a>
              </Button>
            )}
            {status === "loading" && <p>.....</p>}
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  walletToggle,
  navigationToggle,
})(Header);
