import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { PostSchema } from "./schemas/post.schema";
import { IPost } from "./interfaces/post.interface";


@Injectable()
export class PostsService {

    constructor(@InjectModel("Post") private readonly postModel:Model<IPost>){

    }

    async findAll(){
        try {
            return await this.postModel.find();
        } catch (e) {
            return e;
        }
    }

    async create(payload){ 
        try {
            return await this.postModel.create({...payload});
        } catch (e) {
            return e;
        }
    }

    async removePost(postId){
        try {
            return await this.postModel.findOneAndRemove(postId);
        } catch (e) {
            return e;
        }
    }
}

