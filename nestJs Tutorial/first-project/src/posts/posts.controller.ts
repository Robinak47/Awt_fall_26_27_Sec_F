import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service.js';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPost(): any {
    return [{ id: 1 }, { id: 2 }];
  }

  @Get(':id')
  getPostById() {
    return this.postsService.getPostInfo();
  }
}
