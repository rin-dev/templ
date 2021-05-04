import {Module} from '@nestjs/common';
import {UserService} from '../users/services/user.service';
import {AuthService} from './services/auth.service';
import {PasswordService} from './services/password.service';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {environment} from '../../environments/environment';
import {JwtStrategy} from './services/jwt.strategy';
import {AuthResolver} from './resolver/auth.resolver';

@Module({
  imports: [
    UserService,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      privateKey: environment.jwt.secret,
      signOptions: {
        expiresIn: environment.jwt.expiresIn,
      },
    }),
  ],
  providers: [
    AuthService,
    PasswordService,
    JwtStrategy,
    AuthResolver,
  ],
  exports: [
    AuthService,
    PassportModule,
  ],
})
export class AuthModule {
}
