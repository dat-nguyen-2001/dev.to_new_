import { JwtPayload } from "./jwt-payload.interface";
import { User } from "src/typeorm";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: JwtPayload): Promise<User>;
}
export {};
