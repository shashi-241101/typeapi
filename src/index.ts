import { createConnection } from 'typeorm';
import express from 'express';
import { createUser } from './routes/createUser';
import { deleteUser } from './routes/deleteUser';
import { getUsers } from './routes/getUser';

const app = express();

const main = async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 3306,
            username: 'test',
            password: 'test',
            database: 'test',
        });

        console.log('Connected to Postgres');

        app.use(express.json());
        app.use(createUser);
        app.use(deleteUser);
        app.use(getUsers);

        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    } catch (error) {
        console.error('Error during database connection initialization', error);
    }
};

main();