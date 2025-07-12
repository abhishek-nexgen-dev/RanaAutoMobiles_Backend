import Joi from "joi";

export const envSchema = Joi.object({
  PORT: Joi.number().default(4000),
  SuperAdmin_Name: Joi.string().required(),
  SuperAdmin_Email: Joi.string().email().required(),
  SuperAdmin_Password : Joi.string().min(6).required(),
  MONGO_URI: Joi.string().uri().required(),
  DB_NAME: Joi.string().required(),

//   NODE_ENV: Joi.string()
//     .valid("development", "production", "test")
//     .default("development"),
}).unknown(); // allow other env vars

export function validateEnv(env: NodeJS.ProcessEnv) {
  const { error, value } = envSchema.validate(env, { abortEarly: false });
  if (error) {
     throw new Error(`Environment validation error: ${error.message}`);
  }
  return value;
}
