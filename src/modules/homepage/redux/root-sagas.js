import { all, call } from "redux-saga/effects";

import { getProjects } from "./table-projects/table-projects.sagas"; 

export default function* rootSaga() {
  yield all([call(getProjects)]);
}