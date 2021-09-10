import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { BusinessException } from './01-Zeppeling.Framework.Core/Exception/businessException';
import { RCRepository } from './02-Zeppeling.Framework.Domain/Aggregates/RC/rc.repository';
import { InsertRCCommandHandler } from './02-Zeppeling.Framework.Domain/Services/RC/Commands/rc.commandHandler';
import { GetRCByIdQueryHandler } from './02-Zeppeling.Framework.Domain/Services/RC/Queries/rc.queryHandler';
import { ZeppelingService } from './03-Zeppeling.Framework.Application/zeppeling.service';
import { RCController } from './04-Zeppeling.Framework.API/API/rcController';


@Module({
    imports: [CqrsModule],
    controllers: [RCController],
    providers: [
        ZeppelingService,
        GetRCByIdQueryHandler,
        InsertRCCommandHandler,
        RCRepository,
    ],
})

export class AppModule { }