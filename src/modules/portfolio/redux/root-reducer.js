import { combineReducers } from "redux";

//reducers
import projects from "./panel-projects/panel-projects.reducer";  

export const rootReducer = combineReducers({
  projects,  
});

export default rootReducer;