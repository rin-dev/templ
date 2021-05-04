import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt} from 'passport-jwt';
import {Injectable} from '@nestjs/common';
import {environment} from '../../../environments/environment';

@Injectable()
export class JwtStrategy extends PassportStrategy(Storage) {

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.jwt.secret
    });
  }

  async validate(payload: any) {
    return {userId: payload.sub, username: payload.username};
  }
}
