import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
// endpoint를 말한다
export class MoviesController {
  @Get()
  getAll() {
    return 'this will be return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie id ${movieId}`;
  }
  @Post()
  create() {
    return 'This is create a movies';
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete one movie id ${movieId}`;
  }
  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `this will patch one movie id ${movieId}`;
  }
  // getOne() {
  //   return 'this will return one movie ';
  // }
}
