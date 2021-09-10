import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { GetRCByIdRequestDTO } from "../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/getRCById.Request.DTO";
import { GetRCByIdResponseDTO } from "../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/getRCById.Response.DTO";
import { InsertRCRequestDTO } from "../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/insertRCRequestDTO";
import { InsertRCResponseDTO } from "../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/insertRCResponseDTO";

@Injectable()
export class ZeppelingService{
    constructor(private commandBus: CommandBus) {}

    public async getRCById(request:GetRCByIdRequestDTO): Promise<GetRCByIdResponseDTO>{
        return await this.commandBus.execute(request);
    }

    public async insertRC(request:InsertRCRequestDTO): Promise<InsertRCResponseDTO>{
        return await this.commandBus.execute(request);
    }
}