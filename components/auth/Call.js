import Axios from "axios";
import { API_URL } from "../../config/Variables";

let Call = {
  login: data => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/login`,
      data
    });
  },

  sendCode: () => {
    return Axios({
      method: "get",
      url: `${API_URL}/user/code`,
      headers: { token: window.localStorage.getItem("token") }
    });
  },

  sendCodeUnverified: email => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/sendcode`,
      data: { email }
    });
  },

  reset: data => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/reset`,
      data
    });
  },

  verify: code => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/code`,
      headers: { token: window.localStorage.getItem("token") },
      data: { code }
    });
  },

  register: data => {
    return Axios({
      method: "post",
      url: `${API_URL}/user/register`,
      data
    });
  }
};

export default Call;
