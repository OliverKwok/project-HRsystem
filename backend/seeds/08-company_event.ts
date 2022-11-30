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
  await seedRow('event', { event_name: 'Annual Dinner', date: '2022-12-30' });
  await seedRow('event', { event_name: 'Fire Drill', date: '2023-01-09' });
  await seedRow('event', { event_name: 'Road Show', date: '2022-12-09' });
  await seedRow('event', { event_name: 'Team Building', date: '2022-12-12' });
  await seedRow('event', {
    event_name: 'Team Lunch (Manager)',
    date: '2022-12-13',
  });
}
