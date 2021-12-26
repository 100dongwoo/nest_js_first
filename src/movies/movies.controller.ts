import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-moive.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
// endpoint를 말한다
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  //
  //
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching for a movie mad after: ${searchingYear}`;
  }
  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    // console.log(movieData);

    return this.moviesService.create(movieData);
  }
  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }
  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
    // return {
    //   updatedMovie: movieId,
    //   ...updateData,
    // };
    // return `this will patch one movie id ${movieId}`;
  }

  // getOne() {
  //   return 'this will return one movie ';
  // }
}
