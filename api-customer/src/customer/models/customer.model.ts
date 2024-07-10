export class TagModel {
  key: string;
  value: string;
}

export interface MethodOfPaymentModel {
  method: string;
  primary: string;
  value: string;
  status: string;
  tags?: Array<TagModel>;
}

export interface CustomerModel {
  id: string;
  fullName: string;
  identification_number: string;
  email: string;
  status: string;
  method_of_payments?: Array<MethodOfPaymentModel>;
}
