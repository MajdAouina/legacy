import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  productId: number;

  @Column()
  quantity: number;

  @Column()
  orderDate: Date;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;
}
