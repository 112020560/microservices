import { IsOptional, IsPositive } from 'class-validator'

export class PaginationDto {
    @IsPositive()
    @IsOptional()
    public page: number = 1;
    @IsPositive()
    @IsOptional()
    public rows: number = 10;
}