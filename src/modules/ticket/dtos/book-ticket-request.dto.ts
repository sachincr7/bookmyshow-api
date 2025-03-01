import { IsArray, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class BookTicketRequestDto {
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  showId: number;

  @IsNotEmpty()
  @IsArray()
  @IsNumber({}, { each: true })
  seatIds: number[];

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  userId: number;
}
