import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm/repository/Repository'
import { Category } from './entities/category.entity'

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(Category) private cateRepo: Repository<Category>
	) {}

	async getHello() {
		// https://stackoverflow.com/questions/67921184/how-to-use-left-join-lateral-in-typeorm
		const result = await this.cateRepo
			.createQueryBuilder('category')
			.leftJoinAndMapMany(
				'category.posts',
				(qb) => {
					qb.getQuery = () =>
						`lateral (select * from post  where category.id = post.category_id order by created_at desc limit :limit)`
					qb.setParameters({ limit: 5 })
					return qb
				},
				'posts',
				'true'
			)
			// .addSelect('posts', 'category.posts')
			// .getMany()
			.getRawMany()

		// const result = await this.cateRepo
		// 	.createQueryBuilder('category')
		// 	.leftJoinAndSelect('category.posts', 'posts')
		// 	.getMany()
		return result
	}
}
