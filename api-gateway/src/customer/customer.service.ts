import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class CustomerService {

  private logger = new Logger(CustomerService.name);
  constructor(@Inject('CUSTOMER_SERVICE') private client: ClientProxy,){}

  async create(createCustomerDto: CreateCustomerDto) {
    const observer = this.client.send({cmd: 'create_customer'}, createCustomerDto);
    return await lastValueFrom(observer);
  }

  async findAll() {
    const observer = this.client.send({cmd: 'get_all_customer'}, {});
    return await lastValueFrom(observer);
  }

  async findAllPagination(paginationDto: PaginationDto) {
    const observer = this.client.send({cmd: 'get_all_customer_pagination'}, paginationDto);
    return await lastValueFrom(observer);
  }

  async findOne(id: string) {
    this.logger.debug({id});
    const observer = this.client.send({cmd: 'find_by_id'}, {id});
    return await lastValueFrom(observer);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const dto: any = updateCustomerDto;
    dto['id'] = id;
    this.logger.debug(dto);
    const observer = this.client.send({cmd: 'update_customer'}, dto);
    return await lastValueFrom(observer);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
