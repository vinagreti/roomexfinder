export class MyPublicData{
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
      this.consume = object.consume || undefined;
      this.kind = object.kind || undefined;
      this.production = object.production || undefined;
      this.cep = object.cep || undefined;
      this.state = object.state || undefined;
      this.city = object.city || undefined;
      this.district = object.district || undefined;
      this.phone = object.phone || undefined;
      this.site = object.site || undefined;
    }
  }
}