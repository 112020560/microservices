import { IsOptional, IsPositive } from 'class-validator'
import { Type } from 'class-transformer'

export class PaginationDto {
    @Type(() => Number)
    @IsPositive()
    @IsOptional()
    public page: number = 1;

    @Type(() => Number)
    @IsPositive()
    @IsOptional()
    public rows: number = 10;
}