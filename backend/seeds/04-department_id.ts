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

  await seedRow('department', {
    dept_name: 'Management',
    head_of_dept: 1,
    managed_by: 2,
  });
  await seedRow('department', { dept_name: 'Administration', managed_by: 2 });
  await seedRow('department', { dept_name: 'Operation', managed_by: 2 });
  await seedRow('department', {
    dept_name: 'Sales',
    head_of_dept: 4,
    managed_by: 2,
  });
  await seedRow('department', {
    dept_name: 'Marketing',
    head_of_dept: 6,
    managed_by: 2,
  });
  await seedRow('department', {
    dept_name: 'Human Resource',
    head_of_dept: 21,
    managed_by: 2,
  });
  await seedRow('department', { dept_name: 'Customer Service', managed_by: 2 });
  await seedRow('department', { dept_name: 'Accounting', managed_by: 3 });
  await seedRow('department', {
    dept_name: 'Finance',
    head_of_dept: 7,
    managed_by: 3,
  });
  await seedRow('department', {
    dept_name: 'Information Technology',
    managed_by: 2,
  });
}
