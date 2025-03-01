import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ticket } from './ticket.entity';
import { PaymentType } from './enums/payment-type.enum';
import { PaymentStatus } from './enums/payment-status.enum';
import { PaymentProvider } from './enums/payment-provider.enum';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({
    type: 'enum',
    enum: PaymentProvider,
  })
  paymentProvider: PaymentProvider;

  @Column()
  time: Date;

  @Column()
  refId: string;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
  })
  paymentStatus: PaymentStatus

  @Column({
    type: 'enum',
    enum: PaymentType,
  })
  paymentType: PaymentType;

  @ManyToOne(() => Ticket, (ticket) => ticket.payments)
  ticket: Ticket;
}
