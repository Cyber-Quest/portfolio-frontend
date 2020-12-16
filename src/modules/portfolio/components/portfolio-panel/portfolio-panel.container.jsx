import { connect } from "react-redux";

import portfolioPanel from "./portfolio-panel.component";

import { getProjects } from "../../redux/panel-projects/panel-projects.actions";

const mapStateToProps = (state) => {
  return {
    projects: state.portfolio.projects, 
  };
};

const mapDispatchToProps = {
 getProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(portfolioPanel);