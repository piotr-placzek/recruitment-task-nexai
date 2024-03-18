import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from 'src/core/core.module';
import { CustomerEntity } from 'src/database/customer.entity';
import { CUstomersController } from './customers.controller';
import { GetCustomerDetailsQueryHandler } from './queries/handlers/get-customer-details-query.handler';

const queryHandlers = [GetCustomerDetailsQueryHandler];

@Module({
  imports: [CoreModule, TypeOrmModule.forFeature([CustomerEntity])],
  controllers: [CUstomersController],
  providers: [...queryHandlers],
})
export class CustomerSModule {}
