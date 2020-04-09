import axios from "axios";


//using the random user api
const employeeURL = 'https://randomuser.me/api/?results=10';

export default{
  search: function(){
        return axios.get(employeeURL);
    }
};