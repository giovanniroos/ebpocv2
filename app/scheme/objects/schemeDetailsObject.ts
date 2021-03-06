import {ISchemeObject} from './schemeObject';

export interface ISchemeDetailsObject{
    scheme: ISchemeObject;
    entityNumber: string;
    schemeName: string;
    startDate: string;
    reviewDate: string;
    lifePlan: string;
    industry: string;
    natureOfBusiness: string;
    nsbcIndicator: string;
    adiPeriod: string;
    statusCode: string;
    statusDate: string;
    billing_Sent: string;
    lastUploadDate: string;
    employerName: string;
    costingType: string;
}