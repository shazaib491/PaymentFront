import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private web: WebService) { }
  order_id(payload:any) {
   return this.web.post('order',payload);
  }
  verify(params){
   return this.web.post('verify',params)
  }
}
