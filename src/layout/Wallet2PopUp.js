import { Fragment } from "react";
import { connect } from "react-redux";
import { wallet2Toggle } from "../redux/actions/siteSettings";
const wallet2PopUp = ({ wallet2Toggle, wallet2 }) => {
  return (
    <Fragment>
      <div
        className={`metaportal_fn_wallet2_closer ${wallet2 ? "active" : ""}`}
        onClick={() => wallet2Toggle(false)}
      />
      <div className={`metaportal_fn_wallet2box ${wallet2 ? "active" : ""}`}>
        <a href="#" className="fn__closer" onClick={() => wallet2Toggle(false)}>
          <span />
        </a>
        <div className="wallet2box">
          <div className="title_holder">
            <img src="https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg" alt="" />
            <h3>Aniket</h3>
          </div>
          <button>Edit Name</button>
            <button>Edit Avatar</button>
            {/* <h3>Donate</h3>
            <img src="/img/qr.jpg" width="100%" alt="" /> */}
            <button>Logout</button>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  wallet2: state.site.wallet2,
});

export default connect(mapStateToProps, { wallet2Toggle })(wallet2PopUp);
