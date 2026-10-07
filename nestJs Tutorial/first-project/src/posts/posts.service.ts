import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPostInfo(): any {
    return { id: 1 };
  }
}
