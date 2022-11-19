class ApiUtils {
    static apiPrefix = process.env.REACT_APP_api_route;

    static async getAllUsers(){
        const usersReq = await fetch(this.apiPrefix + '/users', {
            method: 'GET',
            headers:{
              'Content-Type' : 'application/json'
            }
        });
        let users = await usersReq.json();
        return users;
    }

    static async getAllPotentials(){
        const potentialsReq = await fetch(this.apiPrefix + '/users/potentials', {
            method: 'GET',
            headers:{
              'Content-Type' : 'application/json'
            }
        });
        let potentials = await potentialsReq.json();
        return potentials;
    }

    static async getUserByToken(userToken){
        const res = await fetch(this.apiPrefix + '/users/google-login', {
            method: 'POST',
            body: JSON.stringify({
              token: userToken
            }),
            credentials: 'include',
            headers:{
              'Content-Type' : 'application/json'
            }
          });
          let userData = await res.json();
          return userData;
    }

    static async addNewStudent(id, rank, subDate, joinDate, subTime){
        await fetch(this.apiPrefix + '/users/user/' 
            + id + '?rank='+rank 
            + '&lastSubscriptionDate='+subDate
            + '&joinDate='+joinDate
            + '&subscriptionTime='+subTime.toString(), {
                method: 'POST',
                credentials: 'include',
                headers:{
                'Content-Type' : 'application/json'
                }
        });        
    }
    static async updateStudent(id, rank, subDate, joinDate, subTime){
        await fetch(this.apiPrefix + '/users/user/' 
            + id + '?rank='+rank 
            + '&lastSubscriptionDate='+subDate
            + '&joinDate='+joinDate
            + '&subscriptionTime='+subTime.toString(), {
                method: 'PUT',
                credentials: 'include',
                headers:{
                'Content-Type' : 'application/json'
                }
        });  
    }

}

export default ApiUtils;