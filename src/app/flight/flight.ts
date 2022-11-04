export class flight {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dob: string;
  gender: string;
  pickup: string;
  pdate: string;
  drop:string;
  seat:string;
  insurance:string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}