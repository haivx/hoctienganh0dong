import axios from 'axios';
import get from "lodash/get";
import { useQuery } from "./helpers";

const server = "http://localhost:5000/v1";

class API {
    authorization = () => {
        return get(JSON.parse(localStorage.getItem("auth")), "identityToken", useQuery().get("identityToken"));
    };

    get = (path = "", params = {}, callback) => {
        axios
            .get(`${server}${path}`, {
                params,
                headers: {
                    Authorization: this.authorization,
                },
            })
            .then((response) => {
                callback(response.data);
            })
            .catch((error) => {
                let errMsg = get(error, "response.data.error", "");
                callback(null, errMsg);
            });
    };

    post = (path = "", params = {}, callback) => {
        axios
            .post(`${server}/${path}`, params, {
                headers: {
                    Authorization: this.authorization(),
                },
            })
            .then((response) => {
                console.log(response);
                callback(response.data);
            })
            .catch((error) => {
                let error_message = get(error, "response.data.message", "");
                callback(null, error_message);
            });
    };
}

export default new API();
