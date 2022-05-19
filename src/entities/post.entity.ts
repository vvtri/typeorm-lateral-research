import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm'
import { Category } from './category.entity'

@Entity()
export class Post {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	content: string

	@CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
	createdAt: Date

	@ManyToOne(() => Category, (category) => category.posts)
	@JoinColumn({ name: 'category_id' })
	category: Category
}
