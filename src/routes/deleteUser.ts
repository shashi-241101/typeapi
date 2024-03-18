import express from 'express';
import { User } from '../entities/User';

const router = express.Router();

router.delete(
	'/api/user/:userId',
	async (req, res) => {
		const { userId } = req.params;

		const response = await User.delete(
			userId
		);

		return res.json({
			statusCode: 200,
			message: 'User deleted successfully!',
			response: response,
		
		});
	}
);

export { router as deleteUser };
