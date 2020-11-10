import form_projects from "./table-projects.types";

export const getProjects = () => (dispatch) => {
  dispatch({
    type: form_projects.GET_PROJECTS
  });
};