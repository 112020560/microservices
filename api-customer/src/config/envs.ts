import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  MONGO_DB_URL: string;
  MONGO_DB: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    MONGO_DB_URL: joi.string().required(),
    MONGO_DB: joi.string().required()
  })
  .unknown(true);

const { error, value } = envsSchema.validate( process.env );

if( error ) {
    throw new Error(`Config validation error: ${error}`)
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    mongo_db_url: envVars.MONGO_DB_URL,
    mongo_db: envVars.MONGO_DB
}
