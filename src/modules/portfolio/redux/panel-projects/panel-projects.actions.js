import crud_form_projects_types from "./panel-projects.types";  

export const getProjects = (params) => (dispatch) => {
  dispatch({
    type: crud_form_projects_types.GET_PROJECT,
    payload: params,
  });
};
