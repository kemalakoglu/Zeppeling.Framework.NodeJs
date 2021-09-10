import { model } from "mongoose";
import RCSchema from "./rc.schema";

export interface IRC {
    code: string;
    message: number;
    insertDate?: Date;
    updateDate?: Date;
  }

export const RCModel = model<IRC>("RC", RCSchema);