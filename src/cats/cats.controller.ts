import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
@ApiTags('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCats() {}

  @ApiOperation({
    summary: '회원가입',
  })
  @Post('signup')
  async signUp(@Body() body: CreateCatDto, @Query('role') role: string) {
    return await this.catsService.signup(body);
  }

  @Post('login')
  logIn() {}

  @Post('logout')
  logOut() {}

  @Post('upload')
  uploadCatImg() {}
}
