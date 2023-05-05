import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {

  const { data: session } = useSession();
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="metaportal_fn_mobnav">
        <div className="mob_top" style={{display:"flex", justifyContent:"space-between"}}>
          <div className="social_trigger">
            <div className="trigger" style={{width:"20px"}} onClick={() => navigationToggle(true)}>
              <span />
            </div>
          </div>
            <img src="/img/shinnextream.png" width="100px" style={{margin:"0 35px"}} alt="" />



          <div className="wallet" style={{ display: "flex" }}>
            {session?.user ? (
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
            ) : (
              <Button color="secondary" auto onClick={() => signIn("google")}>
                <a
                  style={{fontFamily:"font1", fontSize:"20px", padding:"1rem 0rem"}}
                  className="wallet_opener"
                >Login
                </a>
              </Button>
            )}
          </div>



        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <a className="creative_link" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="creative_link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="creative_link" href="#collection">
                Collection
              </a>
            </li>
            <li>
              <a className="creative_link" href="#news">
                Blog
              </a>
            </li>
            <li>
              <a className="creative_link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
