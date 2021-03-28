// Created Profile Class
class Profile{
    constructor()
    {
        this.clientid = "",
        this.clientSecret = ""
    }
    // Profile information received via API
    async GetProflie(username){
        const getProfiles = await fetch("https://jsonplaceholder.typicode.com/users?username="+username);
        const profile = await getProfiles.json();
        return {profile};
    }
    //Profile To Do information received via API
    async GetToDo(id){
        const getTodo = await fetch("https://jsonplaceholder.typicode.com/todos?userId="+id);
        const todo = await getTodo.json();
        return {todo};
    }
}
