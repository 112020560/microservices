import { ApiProperty } from "@nestjs/swagger";

export class TagDto {
    @ApiProperty()
    key: string;
    @ApiProperty()
    value: string;
  }
  
  export class MethodOfPaymentDto {
    @ApiProperty()
    method: string;
    @ApiProperty()
    is_default: boolean;
    @ApiProperty()
    value: string;
    @ApiProperty()
    status: string;
    @ApiProperty({ type: () => TagDto })
    tags: Array<TagDto>;
  }
  export class CreateCustomerDto {
    @ApiProperty()
    first_name: string;
    @ApiProperty()
    second_name: string;
    @ApiProperty()
    last_name: string;
    @ApiProperty()
    second_last_name: string;
    @ApiProperty()
    identification_number: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    create_date: Date;
    @ApiProperty()
    update_date: Date;
    @ApiProperty()
    status: string;
    @ApiProperty({ type: () => MethodOfPaymentDto })
    method_of_payments: Array<MethodOfPaymentDto>;
  }
