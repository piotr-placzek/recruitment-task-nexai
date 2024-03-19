import { IQuery } from "@nestjs/cqrs";

export class GetCarDetailsQuery implements IQuery {
    constructor(public readonly id: string) { }
}