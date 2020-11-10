import form_projects from "./table-projects.types";

const INITIAL_STATE = {
  projects: {
    loading: true,
    items: [],
    error: false,
  },
};

const form_reports_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case form_projects.LOADING_GET_ROLLPLAY_CLOSING:
      return {
        ...state,
        projects: {
          loading: true,
          items: [...state.projects.items],
          error: false,
        },
      };

    case form_projects.SUCCESS_GET_ROLLPLAY_CLOSING:
      return {
        ...state,
        projects: {
          loading: false,
          items: action.payload,
          error: false,
        },
      };

    case form_projects.FAIL_GET_ROLLPLAY_CLOSING:
      return {
        ...state,
        projects: {
          loading: false,
          items: "",
          error: true,
        },
      };

    default:
      return state;
  }
};

export default form_reports_reducer;