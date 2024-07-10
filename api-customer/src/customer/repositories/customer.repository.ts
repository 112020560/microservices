import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { CustomerDocument, CustomerEntity } from "../entities";
import { CreateCustomerDto, UpdateCustomerDto } from "../dto";
import { PaginationDto } from "src/common";

@Injectable()
export class CustomerRepository {
  private logger = new Logger(CustomerRepository.name);
    constructor(
        @InjectModel(CustomerEntity.name) private customerModel: Model<CustomerEntity>,
      ) {
        mongoose.set('debug', true);
      }

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
        return await this.customerModel.find().sort({_id: -1});
      }

      async findPagination(limit: number, page: number): Promise<Array<CustomerDocument>> {

        // const countRows: number = await this.customerModel.countDocuments();
        // const page = paginationDto.page - 1;
        // const resultPerPage = countRows <= paginationDto.rows ? countRows : paginationDto.rows;

        // return await this.customerModel.find()
        // .sort({_id: -1})
        // .limit(resultPerPage)
        // .skip(resultPerPage * page)
        // ;

        return await this.customerModel.find()
        .sort({_id: -1})
        .limit(limit)
        .skip(page);
      }

      async CountRows(): Promise<number> {
        return await this.customerModel.countDocuments();
      }
    
      async findOne(id: string): Promise<CustomerDocument> {
        this.logger.debug(id)
        return await this.customerModel.findById( new mongoose.Types.ObjectId(id));
      }
    
      async update(id: string, updateCustomerDto: UpdateCustomerDto) {
        const {id: __, ...data} = updateCustomerDto;
        this.logger.debug(`Id ${id}`);
        this.logger.debug(`Data: ${JSON.stringify(data)}`);
        return await this.customerModel.updateOne({
          where: {
            _id: new mongoose.Types.ObjectId(id),
          },
          data,
        });
      }
}