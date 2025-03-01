import { TicketStatus } from '@/entities/ticket-status.enum';
import { IsArray, IsDate, IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class BookTicketResponseDto {
  id: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  ticketId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsNotEmpty()
  @IsString()
  auditoriumName: string;

  @IsNotEmpty()
  @IsEnum(TicketStatus)
  status: TicketStatus;

  @IsNotEmpty()
  @IsArray()
  seatNumbers: string[];

  @IsNotEmpty()
  @IsString()
  message: string;
} 