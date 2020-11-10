import { combineReducers } from "redux";

//reducers
import projects from "./table-projects/table-projects.reducer"; 

export const rootReducer = combineReducers({
  projects, 
});

export default rootReducer;