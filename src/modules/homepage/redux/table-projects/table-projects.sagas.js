import { takeLatest, put } from "redux-saga/effects";

import form_projects from "./table-projects.types";

//import api from "core/services/api";

export function* getProjectAsync() {
  yield put({ type: form_projects.GET_PROJECTS });

  try { 
   /* let { data } = yield api.get(`rollpay-closing`);

    data.map((item, index) => {
      item["key"] = index;
      return null;
    });
  */
    yield put({
      type: form_projects.SUCCESS_GET_PROJECTS,
      payload: 1, //data,
    });
  } catch (err) {
    yield put({ type: form_projects.FAIL_GET_PROJECTS });
  }
} 

export function* getProjects() {
  yield takeLatest(
    form_projects.GET_PROJECTS,
    getProjectAsync
  );
}