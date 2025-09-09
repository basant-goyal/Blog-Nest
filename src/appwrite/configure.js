import config from "../config/config";
import { Client, ID , Databases, Storage, Query} from "appwrite";
import { useSelector } from "react-redux";

// all the functionalities and requirements of Account, Databases, Storage etc. comes from appwrite so refer to that

export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);

        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title,slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }
        catch(error){
            console.log("Appwrite Service :: createPost ::error ",error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }
        catch(error){
            console.log("Appwrite Service :: updatePost ::error ",error);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
            return true;
        }
        catch(error){
            console.log("Appwrite Service :: deletePost ::error ",error);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug
            )
        }
        catch(error){
            console.log("Appwrite Service :: getPost ::error ",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            )
        }
        catch(error){
            console.log("Appwrite Service :: getPosts ::error ",error);
            return false;
        }
    }

    async myPosts(queries = [Query.equal("userId", useSelector((state) => state.auth.userData.$id))]){
        try{
            return await this.databases.listDocuments(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                queries
            )
        }
        catch(error){
            console.log("Appwrite Service :: myPosts ::error ",error);
            return false;
        }
    }

    // file upload service

    async uploadFile(file){
        try{
            return await this.storage.createFile(
                config.appwriteBucketID,
                ID.unique(),
                file
            )
        }
        catch(error){
            console.log("Appwrite Service :: uploadFile ::error ",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.storage.deleteFile(
                config.appwriteBucketID,
                fileId
            )
            return true;
        }
        catch(error){
            console.log("Appwrite Service :: deleteFile ::error ",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFileView(
            config.appwriteBucketID,
            fileId,
        )
    }
}

const service = new Service()

export default service;