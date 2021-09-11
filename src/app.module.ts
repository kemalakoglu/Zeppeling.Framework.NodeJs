import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CqrsModule } from '@nestjs/cqrs';
import { RCRepository } from './02-Zeppeling.Framework.Domain/Aggregates/RC/rc.repository';
import { InsertRCCommandHandler } from './02-Zeppeling.Framework.Domain/Services/RC/Commands/rc.commandHandler';
import { GetRCByIdQueryHandler } from './02-Zeppeling.Framework.Domain/Services/RC/Queries/rc.queryHandler';
import { ZeppelingService } from './03-Zeppeling.Framework.Application/zeppeling.service';
import { RCController } from './04-Zeppeling.Framework.API/API/rcController';
import { LoggingInterceptor } from './extensions/log.interceptor';
import { TransformInterceptor } from './extensions/transform.interceptor';


@Module({
    imports: [
        CqrsModule
    ],
    controllers: [RCController],
    providers: [
        ZeppelingService,
        GetRCByIdQueryHandler,
        InsertRCCommandHandler,
        RCRepository,
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor, 
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor, 
        }
    ],
})

export class AppModule { }