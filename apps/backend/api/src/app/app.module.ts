import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {environment} from '../environments/environment';
import {GraphQLModule} from '@nestjs/graphql';
import {AuthModule} from './auth/auth.module';
import {resolverMap} from './app.resolver';
import {UserEntity} from './users/entities/user.entity';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.connection,
      entities: [UserEntity],
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      context: ({req}) => ({req}),
      playground: true,
      resolvers: [resolverMap],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {
}
