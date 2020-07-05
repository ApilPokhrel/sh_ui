import Axios from "axios";
import { API_URL } from "../../config/Variables";

let Call = {
  getBanners: () => {
    return Axios({
      method: "get",
      url: `${API_URL}/banner/all`,
      params: {
        limit: 6,
        start: 0
      }
    });
  },
  getProducts: () => {
    return Axios({
      method: "get",
      url: `${API_URL}/product/all`,
      params: {
        limit: 16,
        start: 0
      }
    });
  },
  getCategories: () => {
    return Axios({
      method: "get",
      url: `${API_URL}/category/subtype/all`,
      params: {
        limit: 10,
        start: 0
      }
    });
  },
  getPosts: () => {
    return Axios({
      method: "get",
      url: `${API_URL}/post/all`,
      params: {
        limit: 5,
        start: 0
      }
    });
  }
};

export default Call;
