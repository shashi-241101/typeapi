import express from 'express';
import { User } from '../entities/User';

const router = express.Router();

router.get('/api/all', async (req, res) => {
	const userData = await User.find();

	return res.json({
		statusCode: 200,
		message: 'User fetched successfully!',
		response: userData,
	});
});

export { router as getUsers };
