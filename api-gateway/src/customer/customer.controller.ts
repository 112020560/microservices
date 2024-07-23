import { Controller, Get, Post, Body, Patch, Param, Delete, Version, Logger, Query } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/common/dto/pagination.dto';

const version = '1';
@ApiTags('CustomController')
@Controller('customer')
export class CustomerController {
  private logger = new  Logger(CustomerController.name);
  constructor(private readonly customerService: CustomerService) {}

  @Version(version)
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    this.logger.debug(`create method invoke`)
    return this.customerService.create(createCustomerDto);
  }

  @Version(version)
  @Get()
  findAll() {
    this.logger.debug(`findAll invoke`)
    return this.customerService.findAll();
  }

  @Version(version)
  @Get('query')
  findAllPagination(@Query() paginationDto: PaginationDto) {
    this.logger.debug(`findAllPagination invoke`)
    return this.customerService.findAllPagination(paginationDto);
  }

  @Version(version)
  @Get(':id')
  findOne(@Param('id') id: string) {
    this.logger.debug(`FindOne: ${id}`);
    return this.customerService.findOne(id);
  }

  @Version(version)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    this.logger.debug(`invoke update: ${id}`);
    this.logger.debug(updateCustomerDto);
    return this.customerService.update(id, updateCustomerDto);
  }

  @Version(version)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
