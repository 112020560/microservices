import { Injectable, Logger } from "@nestjs/common";
import { CreateMemberDto, UpdateMemberDto } from "../dto";
import { MemberDocument, MemberEntity } from "../entities";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";

@Injectable()
export class MemberRepository {
  private logger = new Logger(MemberRepository.name);
    constructor(@InjectModel(MemberEntity.name) private memberModel: Model<MemberEntity>) {
        mongoose.set('debug', true);
      }
    async create(createMemberDto: CreateMemberDto): Promise<MemberDocument> {
      const createCustomer = new this.memberModel(createMemberDto);
      const response = await createCustomer.save();
      console.log('Response =>', response);
      return response;
      }
    
      async findAll(): Promise<Array<MemberDocument>> {
        return await this.memberModel
        .find({
          status: { $ne: 'disable' },
        })
        .sort({ _id: -1 });
      }

      async findPagination(
        limit: number,
        page: number,
      ): Promise<Array<MemberDocument>> {
    
        return await this.memberModel
          .find()
          .sort({ _id: -1 })
          .limit(limit)
          .skip(page);
      }

      async CountRows(): Promise<number> {
        return await this.memberModel.countDocuments();
      }
    
      async findOne(id: string): Promise<MemberDocument> {
        this.logger.debug(id);
        return await this.memberModel.findById(new mongoose.Types.ObjectId(id));
      }
    
      async update(id: string, updateMemberDto: UpdateMemberDto) {
        const { id: __, ...data } = updateMemberDto;
        this.logger.debug(`Id ${id}`);
        this.logger.debug(`Data: ${JSON.stringify(data)}`);
        return await this.memberModel.updateOne(
          { _id: new mongoose.Types.ObjectId(id) },
          data,
        );
      }
    
      async remove(id: string, updateMemberDto: UpdateMemberDto) {
        return await this.memberModel.updateOne(
          { _id: new mongoose.Types.ObjectId(id) },
          updateMemberDto,
        );
      }
}