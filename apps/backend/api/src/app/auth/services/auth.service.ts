import {Injectable} from '@nestjs/common';
import {ISignAuthPayload, ISignAuthResponse} from '@autodomkst/shared/data-access/interfaces';
import {UserService} from '../../users/services/user.service';

@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UserService
  ) {}

  async login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse>{
    return
  }
}
