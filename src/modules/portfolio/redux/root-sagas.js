import { all, call } from "redux-saga/effects";

import { getProject } from "./panel-projects/panel-projects.sagas";  

export default function* rootSaga() {
  yield all([call(getProject)]);
}