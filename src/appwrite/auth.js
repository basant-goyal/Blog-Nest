import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// only this file uses the services of appwrite and in future if we want to change our vendor or service
// we only need to change this. our front end knows only the methods of authservice

export class AuthService{
    client = new Client();

    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);
        
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email ,password , name);

            if(userAccount){
                // call another method
                return this.login({email,password});
            }else{
                return userAccount;
            }
        }
        catch (error){
            throw error;
        }
    }

    async login({email, password}){
        try{            
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch(error){
            throw error
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("Appwrite Service :: getCurrentUser ::error ",error);
        }
        return null;
    }

    async logOut(){
        try{
            return await this.account.deleteSessions();
        }
        catch(error){
            console.log("Appwrite Service :: logOut ::error ",error);
        }
    }
}

const authService = new AuthService();

export default authService