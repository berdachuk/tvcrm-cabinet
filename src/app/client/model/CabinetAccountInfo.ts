import * as models from './models';

export class CabinetAccountInfo {
    public accountNo:string;
    public balance:number;
    public clientName:string;
    public services:Array<models.ServiceInfo>;
    public documents:Array<models.DocInfo>;

    constructor(accountNo?:string, balance?:number, clientName?:string, services?:Array<models.ServiceInfo>, documents?:Array<models.DocInfo>) {
        this.accountNo = accountNo;
        this.balance = balance;
        this.clientName = clientName;
        this.services = services;
        this.documents = documents;
    }
}
