export class TagModel {
    key: string;
    value: string;
  }
  


export interface MethodOfPaymentModel {
    method: string;
    is_default: boolean;
    value: string;
    status: string;
    tags: Array<TagModel>;
  }

export interface CustomerModel {
    id: string;
  first_name: string;
  second_name: string;
  last_name: string;
  second_last_name: string;
  identification_number: string;
  email: string;
  create_date: Date;
  update_date: Date;
  status: string;
  method_of_payments: Array<MethodOfPaymentModel>;
}