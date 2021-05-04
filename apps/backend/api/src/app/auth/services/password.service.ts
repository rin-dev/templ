import {Injectable} from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class PasswordService {

  private saltRound = 10;

  getHash(password: string): Promise<string> {
    return hash(password, this.saltRound);
  }

  compare(pasword: string, passwordHash: string): Promise<boolean> {
    return compare(pasword, passwordHash);
  }

}
