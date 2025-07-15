import Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.number().default(4000),
  SuperAdmin_Name: Joi.string().required(),
  SuperAdmin_Email: Joi.string().email().required(),
  SuperAdmin_Password: Joi.string().min(6).required(),
  MONGO_URI: Joi.string().uri().required(),
  DB_NAME: Joi.string().required(),
  BUNNY_BUCKET_Name: Joi.string().required(),
  BUNNY_PASSWORD: Joi.string().required(),
  BUNNY_REGION: Joi.string().required(),
  is_Development: Joi.boolean().default(false),
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

// password: envConstant.BUNNY_secretAccessKey,         // Your Bunny storage zone password
// region: envConstant.BUNNY_REGION || 'sg',   // 'sg' for Singapore, 'de' for Germany, etc.
