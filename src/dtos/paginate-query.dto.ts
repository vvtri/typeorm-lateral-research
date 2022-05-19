import { Type } from 'class-transformer'
import { IsNumber, IsNumberString, IsOptional } from 'class-validator'

export class PaginateQueryDto {
	@IsNumber()
	@Type(() => Number)
	page: number = 1

	@IsNumber()
	@Type(() => Number)
	limit: number = 10
}
