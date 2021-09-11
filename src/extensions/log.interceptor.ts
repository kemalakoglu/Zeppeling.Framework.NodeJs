import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { tap } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import _ from "lodash";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        console.log(`${'End point: ' + _.get(context, 'constructorRef.name') + ', Original Url: ' + _.get(context, 'args[0].originalUrl') + ', Type: ' + _.get(context, 'args[0].method') + ', Body: ' + JSON.stringify(_.get(context, 'args[0].body')) + ', Requst Consume at ' + Date.now()}`);
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(`${'End point: ' + _.get(context, 'constructorRef.name') + ', Original Url: ' + _.get(context, 'args[0].originalUrl') + ', Type: ' + _.get(context, 'args[0].method') + ', Return Response at ' + Date.now()}`)),
            );
    }
}