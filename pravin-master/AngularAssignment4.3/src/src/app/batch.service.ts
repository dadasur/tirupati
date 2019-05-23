import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService 
{
 constructor() { }

 // Write method in service class which returns array 
 // of batch details
GetBatchDetails()
{
  return [
    {"Name":"C", "prise":9000, "Author":"denis richi", "Noofpage":9000},
    {"Name":"C++", "prise":8000, "Author":"KmThomson", "Noofpage":8000},
    {"Name":"java", "prise":7000, "Author":"jms", "Noofpage":7000},
    {"Name":"Datastruct", "prise":6000, "Author":"sartaj sahani", "Noofpage":6000},
        ];
}

}
