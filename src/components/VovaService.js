import axios from 'axios';

// const PROJECT_REST_API_URL = 'http://192.168.0.108:8090/project';
const PROJECT_REST_API_URL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

class VovaService {

    getProjects() {
        return axios.get(PROJECT_REST_API_URL)
    }
}

export default new VovaService();