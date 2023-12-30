export class AuthResponse{
    email : string;
    firstName: string;
    token : string;
    constructor(name:string, email:string, token: string){
        this.firstName = name;
        this.email = email;
        this.token = token
    }
}