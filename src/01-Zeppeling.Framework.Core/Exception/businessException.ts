import { HttpException, HttpStatus } from "@nestjs/common";
import _ from "lodash";

export class BusinessException extends HttpException {
    constructor(message) {
        super(message, HttpStatus.FORBIDDEN);
    }
}