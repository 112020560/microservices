import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CustomerDocument, CustomerEntity } from "../entities";
import { CreateCustomerDto, UpdateCustomerDto } from "../dto";

@Injectable()
export class CustomerRepository {
    constructor(
        @InjectModel(CustomerEntity.name) private customerModel: Model<CustomerEntity>,
      ) {}

      async create(createCustomerDto: CreateCustomerDto): Promise<CustomerDocument> {
        //console.log(createCustomerDto.password);
        // createCustomerDto.password = await this.encryptService.EncrypAsync(
        //   createCustomerDto.password,
        // );
        const createCustomer = new this.customerModel(createCustomerDto);
        const response = await createCustomer.save();
        console.log('Response =>', response)
        return response;
      }
    
      async findAll(): Promise<Array<CustomerDocument>> {
        return await this.customerModel.find();
      }
    
      async findOne(id: string): Promise<CustomerDocument> {
        return await this.customerModel.findById(id);
      }
    
      async update(id: string, updateCustomerDto: UpdateCustomerDto) {
        return await this.customerModel.updateOne({
          where: {
            _id: id,
          },
          updateCustomerDto,
        });
      }
}