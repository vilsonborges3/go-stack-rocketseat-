import { isEqual } from 'date-fns';
import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointments';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    // const findAppointment = this.appointments
    //  .find((appointment) => isEqual(date, appointment.date));

    const findAppointment = await this.findOne({
      where: { date },
    });
    return findAppointment || null;
    /**
     * Toda async await retorna uma Promise e dentro da promisse falamos
     * qual o retorno da promise
     */
  }
}

export default AppointmentsRepository;
