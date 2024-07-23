import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { PaginationDto } from 'src/common';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @MessagePattern({cmd: 'create_customer'})
  create(@Payload() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @MessagePattern({cmd: 'get_all_customer'})
  findAll() {
    return this.customerService.findAll();
  }

  @MessagePattern({cmd: 'get_all_customer_pagination'})
  async findAllPagination(@Payload() paginationDto: PaginationDto) {
    return await this.customerService.findPagination(paginationDto);
  }

  @MessagePattern({cmd: 'find_by_id'})
  findOne(@Payload() id: string) {
    return this.customerService.findOne(id);
  }

  @MessagePattern({cmd: 'update_customer'})
  update(@Payload() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(updateCustomerDto.id, updateCustomerDto);
  }

  @EventPattern( {cmd: 'delete_by_id'})
  remove(@Payload() id: string) {
    this.customerService.remove(id);
  }
}
