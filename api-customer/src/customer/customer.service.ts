import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository, SharedRepository } from './repositories';
import { CustomerDocument } from './entities';

@Injectable()
export class CustomerService {

  constructor(private readonly customerRepository: CustomerRepository,
            private readonly sharedRepository: SharedRepository) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerDocument> {
    createCustomerDto.password = await this.sharedRepository.EncrypAsync(
      createCustomerDto.password,
    );

    return await this.customerRepository.create(createCustomerDto);
  }

  async findAll(): Promise<Array<CustomerDocument>> {
    return await this.customerRepository.findAll();
  }

  async findOne(id: string): Promise<CustomerDocument> {
    return await this.customerRepository.findOne(id);
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerRepository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
