import crud_contact_types from "./crud-contact.types"; 
import API from "core/services/api";

export const postSendEmail = (params) => async (dispatch) => {   
  try {
    dispatch({
      type: crud_contact_types.POST_SEND_EMAIL,
      params: params
    });
    const { data } = await API.post(`send-email`, params); 

    dispatch({
      type: crud_contact_types.SUCCESS_POST_SEND_EMAIL,
      payload: data,
    });

    return true;
  } catch (e) {
    dispatch({
      type: crud_contact_types.FAIL_POST_SEND_EMAIL,
    });

    let fail_response = "Erro inesperado!";

    if (e.response) if (e.response.data) fail_response = e.response.data.error;

    return fail_response;
  }
}; 