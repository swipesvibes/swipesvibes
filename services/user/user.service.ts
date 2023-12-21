import BaseService from '../base.service';
import { UpdateUserReq } from './request/update-user.req';
import { UpdateUserRes } from './response/update-user.res';

class UserService extends BaseService {
  constructor() {
    super();
  }

  async update(data: UpdateUserReq) {
    const response = await this.client.patch<UpdateUserRes>(
      '/api/v1/user/me',
      data
    );
    return response;
  }
}

export default new UserService();
