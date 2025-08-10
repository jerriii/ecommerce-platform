import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    PORT: process.env.PORT || 5000,
    MONGO_URI: process.env.MONGO_URI as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    UPLOAD_BASE_DIR: process.env.UPLOAD_BASE_DIR || 'public/uploads',
}