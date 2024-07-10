import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository, SharedRepository } from './repositories';
import { CustomerDocument } from './entities';
import { CustomerModel, MethodOfPaymentModel } from './models';
import { PaginationDto } from 'src/common';
import { PaginationResponseModel } from 'src/common/models/pagination-result.model';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly sharedRepository: SharedRepository,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerModel> {
    createCustomerDto.password = await this.sharedRepository.EncrypAsync(
      createCustomerDto.password,
    );

    const customerDoc: CustomerDocument =
      await this.customerRepository.create(createCustomerDto);

    return {
      id: customerDoc._id.toString(),
      fullName: `${customerDoc.first_name} ${customerDoc.second_name} ${customerDoc.last_name} ${customerDoc.second_last_name}`,
      identification_number: customerDoc.identification_number,
      status: customerDoc.status,
      email: customerDoc.email,
      method_of_payments:
        customerDoc.method_of_payments.map<MethodOfPaymentModel>((mop) => {
          return {
            method: mop.method,
            primary: mop.is_default ? 'Y' : 'N',
            value: mop.value,
            status: mop.status,
          };
        }),
    };
  }

  async findAll(): Promise<Array<CustomerModel>> {
    const customerDoc: Array<CustomerDocument> = await this.customerRepository.findAll();
    return customerDoc.map((doc) => {
      return {
        id: doc._id.toString(),
        fullName: `${doc.first_name} ${doc.second_name} ${doc.last_name} ${doc.second_last_name}`,
        identification_number: doc.identification_number,
        status: doc.status,
        email: doc.email,
      };
    });
  }

  async findPagination(paginationDto: PaginationDto): Promise<PaginationResponseModel<CustomerModel>>{
    const countRows: number =  await this.customerRepository.CountRows();

    const page = paginationDto.page - 1;
    const resultPerPage = countRows <= paginationDto.rows ? countRows : paginationDto.rows;

    const customerDoc: Array<CustomerDocument> = await this.customerRepository.findPagination(resultPerPage, (resultPerPage * page));
    const customerModel = customerDoc.map((doc) => {
      return {
        id: doc._id.toString(),
        fullName: `${doc.first_name} ${doc.second_name} ${doc.last_name} ${doc.second_last_name}`,
        identification_number: doc.identification_number,
        status: doc.status,
        email: doc.email,
      };
    });
    
    return {
      total_rows: countRows,
      data: customerModel,
      query_timestamp: new Date()
    }
  }

  async findOne(id: string): Promise<CustomerModel> {
    const customerDoc = await this.customerRepository.findOne(id);
    return {
      id: customerDoc._id.toString(),
      fullName: `${customerDoc.first_name} ${customerDoc.second_name} ${customerDoc.last_name} ${customerDoc.second_last_name}`,
      identification_number: customerDoc.identification_number,
      status: customerDoc.status,
      email: customerDoc.email,
      method_of_payments:
        customerDoc.method_of_payments.map<MethodOfPaymentModel>((mop) => {
          return {
            method: mop.method,
            primary: mop.is_default ? 'Y' : 'N',
            value: mop.value,
            status: mop.status,
          };
        }),
    };
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerRepository.update(id, updateCustomerDto);
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
