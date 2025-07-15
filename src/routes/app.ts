import express from 'express';
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { corsOptions } from '../Server';
import { SuperAdminRouter } from '../api/v1/SuperAdmin/SuperAdmin.routes';
import { AuthRoutes } from '../api/v1/Auth/Auth.routes';
import { Category_Router } from '../api/v1/Category/Category.routes';



app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', AuthRoutes, SuperAdminRouter, Category_Router);

export default app;
