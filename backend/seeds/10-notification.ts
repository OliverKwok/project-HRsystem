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
    create_at: '2022-12-01 09:00:00-00',
    title: 'Nov 2022 salary',
    message:
      'The salary of Nov 2022 is paid. If you have any questions, please contact the HR department.',
    message_type: 'payslip',
  });
  await seedRow('notification', {
    create_at: '2022-12-02 09:00:00-00',
    title: 'Annual Dinner 2022',
    message: 'The theme of the annual dinner is Masquerade. Enjoy!',
    message_type: 'company',
  });
  await seedRow('notification', {
    create_at: '2022-12-03 09:00:00-00',
    title: 'Leave Approved',
    message: 'Your leave application (2022-12-29) is approved.',
    message_type: 'leaveAppStatus',
    recipient: '21',
  });
}
