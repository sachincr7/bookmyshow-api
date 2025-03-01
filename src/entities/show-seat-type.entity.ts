import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Show } from "./show.entity";
import { SeatType } from "./seat-type.entity";

@Entity()
export class ShowSeatType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @ManyToOne(() => Show, (show) => show.showSeatTypes)
  show: Show;
  
  @ManyToOne(() => SeatType, (seatType) => seatType.showSeatTypes)
  seatType: SeatType;
}