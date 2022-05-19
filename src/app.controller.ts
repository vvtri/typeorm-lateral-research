import { Controller, Get, Query } from '@nestjs/common'
import { PaginationTypeEnum } from 'nestjs-typeorm-paginate'
import { AppService } from './app.service'
import { PaginateQueryDto } from './dtos/paginate-query.dto'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello() {
		return this.appService.getHello()
	}

	@Get('paginate')
	getPaginate(@Query() query: PaginateQueryDto) {
		const { limit, page } = query
		return this.appService.paginate({
			limit,
			page,
			route: '/paginate',
		})
	}

	@Get('paginateqb')
	getPaginateQb(@Query() query: PaginateQueryDto) {
		const { limit, page } = query
		const category = 5
		return this.appService.paginateQb(
			{
				limit,
				page,
				route: '/paginate',
			},
			category
		)
	}
}
