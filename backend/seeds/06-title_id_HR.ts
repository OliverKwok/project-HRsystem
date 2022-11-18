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
  await seedRow('title', { title_name: 'Human Resource Manager' });
  await seedRow('title', { title_name: 'Human Resources Officer' });
  await seedRow('title', { title_name: 'Human Resource Assistant' });
  

}