import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RCRepository } from "../../../Aggregates/RC/rc.repository";
import { GetRCByIdRequestDTO } from "../../../Contracts/DTO/RC/getRCById.Request.DTO";
import { GetRCByIdResponseDTO } from "../../../Contracts/DTO/RC/getRCById.Response.DTO";
import _ from "lodash";


@CommandHandler(GetRCByIdRequestDTO)
export class GetRCByIdQueryHandler implements ICommandHandler<GetRCByIdRequestDTO>{

    constructor(private rcRepository: RCRepository) { }

    async execute(command: GetRCByIdRequestDTO): Promise<GetRCByIdResponseDTO> {
        const entity = await this.rcRepository.getById(_.get(command, 'key'));
        return new GetRCByIdResponseDTO(
            _.get(entity, '_id'),
            _.get(entity, 'code'),
            _.get(entity, 'message'),
            _.get(entity, 'insertDate'),
            _.get(entity, 'updateDate'),
        )
    }

}