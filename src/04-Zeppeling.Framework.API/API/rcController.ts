import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { GetRCByIdRequestDTO } from "../../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/getRCById.Request.DTO";
import { GetRCByIdResponseDTO } from "../../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/getRCById.Response.DTO";
import { InsertRCRequestDTO } from "../../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/insertRCRequestDTO";
import { InsertRCResponseDTO } from "../../02-Zeppeling.Framework.Domain/Contracts/DTO/RC/insertRCResponseDTO";
import { ZeppelingService } from "../../03-Zeppeling.Framework.Application/zeppeling.service";
import _ from "lodash";

@Controller('rc')
export class RCController {

    constructor(private applicationService: ZeppelingService) { }

    @Get('/:id')
    async get(@Param('id') key: string): Promise<GetRCByIdResponseDTO> {
        return await this.applicationService.getRCById(new GetRCByIdRequestDTO(key));
    }

    @Post('/insert')
    async insert(@Body() request: InsertRCRequestDTO): Promise<InsertRCResponseDTO> {
        return this.applicationService.insertRC(new InsertRCRequestDTO(_.get(request, 'code'), _.get(request, 'message')));
    }
}