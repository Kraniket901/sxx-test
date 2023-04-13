import { Fragment } from "react";
import { connect } from "react-redux";
import { walletToggle } from "../redux/actions/siteSettings";
const WalletPopUp = ({ walletToggle, wallet }) => {
  return (
    <Fragment>
      <div
        className={`metaportal_fn_wallet_closer ${wallet ? "active" : ""}`}
        onClick={() => walletToggle(false)}
      />
      <div className={`metaportal_fn_walletbox ${wallet ? "active" : ""}`}>
        <a href="#" className="fn__closer" onClick={() => walletToggle(false)}>
          <span />
        </a>
        <div className="walletbox">
          <div className="title_holder">
            <h3>Please Donate</h3>
            <p>
             If You Liked Our Work, Please Donate
            </p>
          </div>
            {/* <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a href="#" />
                  <span className="icon">
                    <img src="/img/wallet/metamask.png" alt="" />
                  </span>
                  <span className="text">Metamask</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="#" />
                  <span className="icon">
                    <img src="/img/wallet/coinbase.png" alt="" />
                  </span>
                  <span className="text">Coinbase</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="#" />
                  <span className="icon">
                    <img src="/img/wallet/walletconnect.png" alt="" />
                  </span>
                  <span className="text">WalletConnect</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="#" />
                  <span className="icon">
                    <img src="/img/wallet/venly.png" alt="" />
                  </span>
                  <span className="text">Venly</span>
                </div>
              </li>
            </ul> */}
            <img src="/img/qr.jpg" width="100%" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.site.wallet,
});

export default connect(mapStateToProps, { walletToggle })(WalletPopUp);
