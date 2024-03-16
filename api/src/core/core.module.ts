import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      useFactory: () => {
        console.log(process.env);
        return {
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          port: parseInt(process.env.MYSQL_PORT) || 3306,
          username: process.env.MYSQL_USER || 'admin',
          password: process.env.MYSQL_PASSWORD || 'admin',
          database: process.env.MYSQL_NAME || 'nexai-rt',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
    }),
  ],
})
export default class CoreModule {}
