import {connect} from 'react-redux';
import FilterOptions from './../presentational components/FilterOptions.jsx';

function mapStateToProps(state) {
  return {

  }
}
function mapDispatchToProps(dispatch) {
  return {
    filterChanged : function(newFilter){
      dispatch({type:"SET_VISIBILITY_FILTER",payload:newFilter})
    }
  }
}

export const FilterOptionsContainer = connect(mapStateToProps,mapDispatchToProps)(FilterOptions);
