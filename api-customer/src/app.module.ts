import { Module } from '@nestjs/common';
import { DatabaseModule } from './config';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [DatabaseModule, CustomerModule],
})
export class AppModule {}
