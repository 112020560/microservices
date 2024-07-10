import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'CUSTOMER_SERVICE',
        transport: Transport.TCP,
        options: {
          port: envs.port_customer
        } 
      },
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
