export class Profile{
  consume: number;
  kind : 'cosumer' | 'seller' | 'both' | 'public';
  production: number;
  cep: string;
  state: string;
  city: string;
  district: string;
  phone: string;
  site: string;

  constructor(object: any){
    if(typeof object == 'object'){
      this.consume = object.consume || null;
      this.kind = object.kind || null;
      this.production = object.production || null;
      this.cep = object.cep || null;
      this.state = object.state || null;
      this.city = object.city || null;
      this.district = object.district || null;
      this.phone = object.phone || null;
      this.site = object.site || null;
    }
  }
}