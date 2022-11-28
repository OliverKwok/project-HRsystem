import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // check before insert instead of deleting table
//   await knex('department').del();

  async function seedRow(table: string, rowData: object) {
    let row = await knex(table).select('id').where(rowData).first();
    if (!row) {
      let rows = await knex(table).insert(rowData).returning('id');
      row = rows[0];
    }
    return row;
  }

  await seedRow('department', { dept_name: 'Management' });
  await seedRow('department', { dept_name: 'Administration' });
  await seedRow('department', { dept_name: 'Operation' });
  await seedRow('department', { dept_name: 'Sale' });
  await seedRow('department', { dept_name: 'Marketing' });
  await seedRow('department', { dept_name: 'Human Resource' });
  await seedRow('department', { dept_name: 'Customer Service' });
  await seedRow('department', { dept_name: 'Accounting' });
  await seedRow('department', { dept_name: 'Finance' });
  await seedRow('department', { dept_name: 'Information Technology' });
  
}