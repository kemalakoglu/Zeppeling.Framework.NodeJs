import { Injectable } from "@nestjs/common";
import { RCRepository } from "../../02-Zeppeling.Framework.Domain/Aggregates/RC/rc.repository";
import _ from "lodash";


export class BusinessException extends Error {
    constructor(code: string, message: string) {
        super(code + ' - ' +message);

        this.message = code + ' - ' +message;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, BusinessException.prototype);
        this.throwError();
    }

    throwError() {
        return this.message;
    }
}