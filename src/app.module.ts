require('dotenv').config()
import { Module, ValidationPipe } from '@nestjs/common'
import { APP_PIPE } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import config from 'ormconfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Category } from './entities/category.entity'
import { Post } from './entities/post.entity'

@Module({
	imports: [
		TypeOrmModule.forRoot(config),
		TypeOrmModule.forFeature([Category, Post]),
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_PIPE,
			useValue: new ValidationPipe({
				whitelist: true,
			}),
		},
	],
})
export class AppModule {}
