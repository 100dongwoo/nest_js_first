import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-moive.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
