import express from 'express';
import { User } from '../entities/User';

const router = express.Router();

router.post(
	'/api/create',
	async (req, res) => {
		const { userName, email, codeLanguage, stdin, sourceCode } = req.body;

		const user = User.create({
			userName,
			email,
			codeLanguage,
			stdin,
			sourceCode,
		});

		await user.save();

		return res.json({
			statusCode: 200,
			message: 'User deleted successfully!',
			response: user,
		
		});
	}
);

export { router as createUser };
