import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iPUUqY_zEFN_psn4ogrms0mpekwsi_YeZT5vVljhAq8'
    }
})