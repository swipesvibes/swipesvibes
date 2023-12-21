import { SigninReq } from './signin.req';

export type UpdateUserReq = {
  swipeId?: string;
  gender?: string;
  dateOfBirth?: Date;
  profilePicture?: string;
  displayName?: string;
  code?: string;
  preferences?: string[];
};
