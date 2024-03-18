import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
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
    CqrsModule,
  ],
  exports: [CqrsModule],
})
export default class CoreModule {}
