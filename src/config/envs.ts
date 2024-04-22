import * as Joi from 'joi';
import 'dotenv/config';

interface EnvVars {
  PORT: number;
  NATS_SERVERS: string[];
}

const envSchema = Joi.object({
  PORT: Joi.number().required(),
  NATS_SERVERS: Joi.array().items(Joi.string()).required(),
}).unknown(true);

const { error, value } = envSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) throw new Error(`Config calidation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,

  natsServers: envVars.NATS_SERVERS,
};
