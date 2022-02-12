//API to get the users.
const BASE_API_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";


//Api class to make API calls to the backend server.
class Api {
    
    //Constructor to set the base API url to the BASE_API_URL constant defined above in this class.
    constructor() {
        this.BASE_API_URL = BASE_API_URL;
    }

    //Method to fetch the users from the API and return the users.
    async getUsers() {
        return await fetch(this.BASE_API_URL)
            .then(response => response.json())
            .then(data => data)
            // .catch(error => console.log(error));
    }
}

//Export the Api class so that it can be used in other files in the project.
export default new Api();