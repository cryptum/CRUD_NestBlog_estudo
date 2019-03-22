import { Controller, Get, Post, Delete, Body, Query, Res } from '@nestjs/common';
import { PostsService } from './posts.service';


@Controller('posts')
export class PostsController {
    
    constructor(private readonly postService: PostsService){}

    @Get()
    async index(@Res() res){
        try {
            const posts = await this.postService.findAll();
            return res.status(200).json(posts);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    @Post()
    async store(@Body() payload, @Res() res){
        try {
            const post = await this.postService.create(payload);
            return res.status(200).json(post);
        } catch (e) {
            return res.status(500).json(e);
        }
    }

    @Delete()
    async remove(@Query('id') postId, @Res() res){
        try {
            const post = await this.postService.removePost(postId);
            return res.status(200).json(post);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}
