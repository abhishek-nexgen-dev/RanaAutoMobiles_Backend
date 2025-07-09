import { httpServer } from "./config/socket/socket";
import { envConstant } from "./constant/env.constant";
import app from "./routes/app";
import morgan from "morgan";
import { validateEnv } from "./validator/env.validator";
import { connectDB } from "./config/Db.config";



app.use(morgan("dev"));



validateEnv(process.env);

httpServer.listen(3000, () => {
try {
    console.log(`Server is running on port ${envConstant.PORT}`);
    connectDB()
} catch (error: any) {
    process.exit(1);
}
});