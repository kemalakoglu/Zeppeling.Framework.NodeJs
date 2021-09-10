
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { RCRepository } from "../../../Aggregates/RC/rc.repository";
import _ from "lodash";
import { InsertRCRequestDTO } from "../../../Contracts/DTO/RC/insertRCRequestDTO";
import { RCModel } from "../../../Aggregates/RC/rc.model";
import { InsertRCResponseDTO } from "../../../Contracts/DTO/RC/insertRCResponseDTO";


@CommandHandler(InsertRCRequestDTO)
export class InsertRCCommandHandler implements ICommandHandler<InsertRCRequestDTO>{

    constructor(private rcRepository: RCRepository) { }

    async execute(command: InsertRCRequestDTO): Promise<InsertRCResponseDTO> {
        return await this.rcRepository.insert( new RCModel({
            code: _.get(command, 'code'),
            message: _.get(command, 'message'),
            insertDate: new Date()
        }));
    }
}