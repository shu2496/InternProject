import axios from "axios";

const base_url="http://localhost:8080/messages";

class serviceapi{
    getMessage(){
       return  axios.get(base_url);
    }
}
export default new serviceapi();