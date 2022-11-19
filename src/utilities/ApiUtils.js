class ApiUtils {
    static apiPrefix = process.env.REACT_APP_api_route;

    static exceptionHandle(){
        
        window.location.reload()
    }
    static async getAllUsers(){
        try{
            const usersReq = await fetch(this.apiPrefix + '/users', {
                method: 'GET',
                headers:{
                  'Content-Type' : 'application/json'
                }
            });
            let users = await usersReq.json();
            return users;
    
        }
        catch{
            this.exceptionHandle();
        }
    }

    static async getAllPotentials(){
        try{
            const potentialsReq = await fetch(this.apiPrefix + '/users/potentials', {
                method: 'GET',
                headers:{
                  'Content-Type' : 'application/json'
                }
            });
            let potentials = await potentialsReq.json();
            return potentials;    
        }
        catch{
            this.exceptionHandle();
        }
    }

    static async getUserByToken(userToken){
        try{
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
        catch{
            this.exceptionHandle();
        }
    }

    static async addNewStudent(id, rank, subDate, joinDate, subTime){
        try{
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
        catch{
            this.exceptionHandle();   
        }        
    }

    static async updateStudent(id, rank, subDate, joinDate, subTime){
        try{
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
        catch{
            this.exceptionHandle();
        }
    }
    static async deleteStudent(studentId){
        try{
            await fetch(this.apiPrefix + '/users/user/'
                + studentId, {
                method: 'DELETE',
                credentials: 'include',
                headers:{
                    'Content-Type' : 'application/json'
                }            
            });
        }
        catch{
            this.exceptionHandle();
        }
    }
    static async deletePotential(potentialId){
        try{
            await fetch(this.apiPrefix + '/users/potential/'
                + potentialId, {
                method: 'DELETE',
                credentials: 'include',
                headers:{
                    'Content-Type' : 'application/json'
                }            
            });
        }
        catch{
            this.exceptionHandle();
        }
    }

}

export default ApiUtils;