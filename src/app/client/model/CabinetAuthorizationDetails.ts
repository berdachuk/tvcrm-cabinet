import * as models from './models';

export interface CabinetAuthorizationDetails {
    accNo?:string;
    authorities?:Array<string>;
    clientName?:string;
    token?:models.CabinetToken;
}
