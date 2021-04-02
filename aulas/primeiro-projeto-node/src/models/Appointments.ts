/* eslint-disable camelcase */
import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import User from './User';
/**
 * Um para um (OneToOne)
 * um para varios(OneToMany)
 * Varios para Varios (ManyToMany)
 */

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User) /** Dentro e a função que retorna o model que se deve
  utilizar quando a variavel provider for chamada */
  @JoinColumn({ name: 'provider_id' }) // estamos falando aqui aqual a coluna ue vai identificar
  provider: User;

  @Column('timestamp with time zone')
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Appointment;
