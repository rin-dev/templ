import {AuthGuard} from "@nestjs/passport";
import {ExecutionContext, Injectable} from "@nestjs/common";
import {GqlExecutionContext} from "@nestjs/graphql";


@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt'){
  getRequest(contex: ExecutionContext){
    const ctx = GqlExecutionContext.create(contex);

    return ctx.getContext().req;
  }
}
