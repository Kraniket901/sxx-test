import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";
const SearchButton = ({ searchToggle }) => {
  return (
    <a
      href="#"
      className="metaportal_fn_search hold"
      onClick={(e) => {
        e.preventDefault();
        searchToggle(true);
      }}
    >
      <span className="icon">
        <img src="../img/logo2.png" alt="" />
      </span>
    </a>
  );
};
export default connect(null, { searchToggle })(SearchButton);
