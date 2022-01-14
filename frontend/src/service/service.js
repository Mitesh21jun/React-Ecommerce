import axios from "axios";

const base_url = "http://localhost:3000";

const get_products = async () => {
    // let type="request"
    let response = axios.get(base_url + `/data`);
    return response;
};
  
export default {
 get_products,
}