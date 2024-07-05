import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerEntity, CustomerSchema } from './entities';
import { CustomerRepository, SharedRepository } from './repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: CustomerEntity.name, schema: CustomerSchema}])],
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository, SharedRepository],
})
export class CustomerModule {}
