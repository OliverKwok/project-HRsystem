import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // check before insert instead of deleting table
  async function seedRow(table: string, rowData: object) {
    let row = await knex(table).select('id').where(rowData).first();
    if (!row) {
      let rows = await knex(table).insert(rowData).returning('id');
      row = rows[0];
    }
    return row;
  }
  await seedRow('notification', {
    title: 'Come to join our fitness class',
    message:
      'The new fitness classes has been launched, welcome to check the time table and join the fitness classes',
    message_type: 'other',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Come to join the Python Seminar',
    message:
      'Timetable for Python seminar has been launched, everyone is welcome and invited to join it',
    message_type: 'other',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Come to join the TensorFlow Seminar',
    message:
      'Timetable for TensorFlow seminar has been launched, everyone is welcome and invited to join it',
    message_type: 'other',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Join the annual dinner!',
    message:
      'Time for annual dinner is comfirmed to be held on December 30th, 7pm   , everyone is welcome and invited to join',
    message_type: 'company',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Payslip is released!',
    message:
      'Payslips for Novermber is released, feel free to contact with HR department if any problems',
    message_type: 'payslip',
    recipient: 'all',
  });
}
