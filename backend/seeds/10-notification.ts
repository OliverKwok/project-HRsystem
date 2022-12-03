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
    title: 'Join our fitness class!',
    message:
      'The new fitness classes has been launched, welcome to check the time table and join the fitness classes',
    message_type: 'other',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Join our Python Seminar!',
    message:
      'Timetable for Python seminar has been launched, everyone is welcome and invited to join it',
    message_type: 'other',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Join our TensorFlow Seminar!',
    message:
      'Timetable for TensorFlow seminar has been launched, everyone is welcome and invited to join it',
    message_type: 'other',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Annual Dinner 2022',
    message:
      'Time for annual dinner is comfirmed to be held on December 30th, 7pm. The theme of the annual dinner is Masquerade, everyone is welcome and invited to join. Enjoy!',
    message_type: 'company',
    recipient: 'all',
  });
  await seedRow('notification', {
    title: 'Nov 2022 Payslip',
    message:
      'The salary of Nov 2022 is paid. If you have any questions, please contact the HR department.',
    message_type: 'payslip',
    recipient: 'all',
  });
}
