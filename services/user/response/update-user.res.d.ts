import { UpdateUserReq } from '../request/update-user.req';

export type UpdateUserRes = UpdateUserReq & {
  id: string;
};
