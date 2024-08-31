import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(
    private readonly env: { [k: string]: string | undefined } = process.env,
  ) {}

  get(key: string): string | undefined {
    return this.env[key];
  }

  getDatabaseConfig() {
    return {
      type: 'postgres',
      host: this.get('DB_HOST') || 'localhost',
      port: parseInt(this.get('DB_PORT') || '5432', 10),
      username: this.get('DB_USERNAME') || 'user',
      password: this.get('DB_PASSWORD') || 'password',
      database: this.get('DB_DATABASE') || 'mydatabase',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true, // Disable in production
    };
  }
}
