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

  await seedRow('grade', { grade_name: 'Director' });
  await seedRow('grade', { grade_name: 'C Level' });
  await seedRow('grade', { grade_name: 'Senior Manager' });
  await seedRow('grade', { grade_name: 'Manager' });
  await seedRow('grade', { grade_name: 'Senior' });
  await seedRow('grade', { grade_name: 'Junior' });
  
  
  
}