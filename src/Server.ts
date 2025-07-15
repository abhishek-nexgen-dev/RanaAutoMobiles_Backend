import app from './routes/app';
import { httpServer } from './config/socket/socket';
import { envConstant } from './constant/env.constant';
import morgan from 'morgan';
import helmet from 'helmet';
import cors, { CorsOptions } from 'cors';
import { validateEnv } from './validator/env.validator';
import { connectDB } from './config/Db.config';
import { Request, Response, NextFunction } from 'express';


app.use(morgan('dev'));


validateEnv(process.env);


app.use(helmet());

const whitelist = ['http://localhost:3000', 'https://rana-auto-mobiles-bagodar.vercel.app'];

export const corsOptions: CorsOptions = {
  
  origin: (origin, callback) => {
    console.log('CORS Origin:', origin);
    if (!origin) {
      callback(new Error('Not allowed by CORS'));
    } 
    
    callback(null, true); // Allow the request


  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};





// Start the HTTP server
httpServer.listen(envConstant.PORT, async () => {
  try {
    console.log(`Server is running on port ${envConstant.PORT}`);
    await connectDB();
  } catch (error: any) {
    console.error("Error starting the server:", error.message);
    process.exit(1);
  }
});
