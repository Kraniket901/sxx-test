import { Fragment } from "react";
import { connect } from "react-redux";
import { searchToggle } from "../redux/actions/siteSettings";
import InfiniteCr from "../components/InfiniteCr";
const Searchbox = ({ searchToggle, search }) => {
  return (
    <Fragment>
      <div
        className={`metaportal_fn_search_closer ${search ? "active" : ""}`}
        onClick={() => searchToggle(false)}
      />
      <div className={`metaportal_fn_searchbox ${search ? "active" : ""}`}>
          <InfiniteCr/>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  search: state.site.search,
});

export default connect(mapStateToProps, { searchToggle })(Searchbox);
