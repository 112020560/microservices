import { Inject, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class CustomerService {
  constructor(@Inject('CUSTOMER_SERVICE') private client: ClientProxy,){}
  async create(createCustomerDto: CreateCustomerDto) {
    const observer = this.client.send({cmd: 'create_customer'}, createCustomerDto);
    return await lastValueFrom(observer);
  }

  async findAll() {
    const observer = this.client.send({cmd: 'get_all_customer'}, {});
    return await lastValueFrom(observer);
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
