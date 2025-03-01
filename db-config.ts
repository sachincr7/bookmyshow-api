import { Auditorium } from 'src/entities/auditorium.entity';
import { City } from 'src/entities/city.entity';
import { Language } from 'src/entities/language.entity';
import { Movie } from 'src/entities/movie.entity';
import { Payment } from 'src/entities/payment.entity';
import { SeatType } from 'src/entities/seat-type.entity';
import { Seat } from 'src/entities/seat.entity';
import { ShowSeatType } from 'src/entities/show-seat-type.entity';
import { ShowSeat } from 'src/entities/show-seat.entity';
import { Show } from 'src/entities/show.entity';
import { Theatre } from 'src/entities/theatre.entity';
import { Ticket } from 'src/entities/ticket.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const dbConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'bookmyshow',
  port: 54323,
  username: 'postgres',
  password: 'postgres',
  entities: [
    City,
    Theatre,
    Auditorium,
    Seat,
    Movie,
    SeatType,
    Show,
    Ticket,
    User,
    Payment,
    Language,
    ShowSeatType,
    ShowSeat,
  ],
  synchronize: true,
};
