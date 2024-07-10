export class TagDto {
  key: string;

  value: string;
}

export class MethodOfPaymentDto {
  method: string;

  is_default: boolean;

  value: string;

  status: string;

  tags: Array<TagDto>;
}
export class CreateCustomerDto {
  first_name: string;

  second_name: string;

  last_name: string;

  second_last_name: string;

  identification_number: string;

  email: string;

  password: string;

  create_date: Date;

  update_date: Date;

  status: string;

  method_of_payments: Array<MethodOfPaymentDto>;
}
