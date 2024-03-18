import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	userId: number;

	@Column()
	userName: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column({
	})
	codeLanguage: string;

	@Column({
	})
	stdin: string;
	@Column({
	})
	sourceCode: string;
}
