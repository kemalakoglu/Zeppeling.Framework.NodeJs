import { IRepository } from "../../../01-Zeppeling.Framework.Core/Repository/IRepository";
import { RCModel } from "./rc.model";
import _ from "lodash";
import { Injectable } from "@nestjs/common";
import { InsertRCResponseDTO } from "../../Contracts/DTO/RC/insertRCResponseDTO";
import { BusinessException } from "../../../01-Zeppeling.Framework.Core/Exception/businessException";
import * as dotenv from 'dotenv';
import { ResponseCodes } from "../../../01-Zeppeling.Framework.Core/Constants/responseCodes";
@Injectable()
export class RCRepository implements IRepository {

    constructor() { }

    public async getByCode(code: string) {
        return await RCModel.findOne({ code: code });
    }

    public async get(): Promise<any> {
        return await RCModel;
    }
    public async getById(key: string): Promise<any> {
        throw new BusinessException(`${ResponseCodes.AlreadyExist} - ${_.get( await RCModel.findOne({ code: ResponseCodes.AlreadyExist }), '_doc.message')}`);
        // return await RCModel.findById(key);
    }
    public async getByPage(number: number, pageSize: number): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public async insert(entity: any): Promise<InsertRCResponseDTO> {
        const checkExist = await RCModel.findOne({ code: _.get(entity, 'code') }).exec();

        if (_.get(checkExist, '_doc.code') === _.get(entity, 'code')) {
            throw new BusinessException(`${ResponseCodes.AlreadyExist} - ${_.get( await RCModel.findOne({ code: ResponseCodes.AlreadyExist }), '_doc.message')}`);
        }

        const model = new RCModel({
            code: _.get(entity, 'code'),
            message: _.get(entity, 'message'),
            insertDate: new Date(),
        });
        model.save();
        return await new InsertRCResponseDTO(true);
    }
    public async update(entity: any): Promise<any> {
        return await RCModel.findByIdAndUpdate({ id: _.get(entity, 'id') }, {
            code: _.get(entity, 'code'),
            message: _.get(entity, 'message'),
            updateDate: new Date(),
        });
    }
    public async delete(key: string): Promise<any> {
        return await RCModel.findByIdAndDelete(key);
    }
}