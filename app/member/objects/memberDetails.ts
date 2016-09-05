import {ISchemeMember} from './schemeMember';
import {IPerson} from './person';
import {IMemberStatus} from './memberStatus';
import {IVitality} from './vitality';

export interface IMemberDetails{
  schemeMember: ISchemeMember;
  person: IPerson;
  joinedDate: string;
  memberGroup: string;
  branchName: string;
  priorMemberNo: string;
  payrollNo: string;
  earnings: string;
  smartService: string;
  billingSent: string;
  retirementDate: string;
  underwritingRequired: string;
  memberStatus: IMemberStatus;
  // vitality: IVitality;
}
