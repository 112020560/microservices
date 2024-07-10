import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    second_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    last_name: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    second_last_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    identification_number: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;


    @ApiProperty()
    //@IsDate()
    @IsNotEmpty()
    create_date: Date;

    @ApiProperty()
    //@IsDate()
    @IsOptional()
    update_date: Date;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    status: string;

    @ApiProperty({ type: () => MethodOfPaymentDto })
    @IsOptional()
    method_of_payments: Array<MethodOfPaymentDto>;
  }
