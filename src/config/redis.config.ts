import { RedisOptions, Transport } from '@nestjs/microservices';
import { kill } from 'process';
import * as dotenv from 'dotenv';


const ENV_FILE = `.env`;

dotenv.config({ path: ENV_FILE });

export const redisOptionsFactory = (): RedisOptions => {
    const options: RedisOptions = {
        transport: Transport.REDIS,
        options: {
            host: process.env.REDIS_HOST,
            port: +process.env.REDIS_PORT!,
            password: process.env.REDIS_PASSWORD,
            retryStrategy: () => {
                kill(process.pid, 'SITGERM');
            }
        }
    };

    return options;
};
