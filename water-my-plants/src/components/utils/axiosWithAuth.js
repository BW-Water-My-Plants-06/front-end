import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://water-my-plants-2-electric.herokuapp.com/"
    });
}

export default axiosWithAuth;