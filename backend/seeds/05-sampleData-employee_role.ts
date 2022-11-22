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
  await seedRow('employee_role', {
    employeeID: 1,
    department_id: 1,
    team_id: 6,
    title_id: 1,
  });
  await seedRow('employee_role', {
    employeeID: 2,
    department_id: 1,
    team_id: 6,
    title_id: 2,
  });
  await seedRow('employee_role', {
    employeeID: 3,
    department_id: 1,
    team_id: 6,
    title_id: 3,
  });
  await seedRow('employee_role', {
    employeeID: 4,
    department_id: 4,
    team_id: 6,
    title_id: 4,
  });
  await seedRow('employee_role', {
    employeeID: 5,
    department_id: 4,
    team_id: 6,
    title_id: 5,
  });
  await seedRow('employee_role', {
    employeeID: 6,
    department_id: 5,
    team_id: 6,
    title_id: 6,
  });
  await seedRow('employee_role', {
    employeeID: 7,
    department_id: 9,
    team_id: 6,
    title_id: 7,
  });
  await seedRow('employee_role', {
    employeeID: 8,
    department_id: 9,
    team_id: 6,
    title_id: 7,
  });
  await seedRow('employee_role', {
    employeeID: 9,
    department_id: 5,
    team_id: 1,
    title_id: 9,
  });
  await seedRow('employee_role', {
    employeeID: 10,
    department_id: 9,
    team_id: 6,
    title_id: 10,
  });
  await seedRow('employee_role', {
    employeeID: 11,
    department_id: 4,
    team_id: 6,
    title_id: 11,
  });
  await seedRow('employee_role', {
    employeeID: 12,
    department_id: 5,
    team_id: 2,
    title_id: 12,
  });
  await seedRow('employee_role', {
    employeeID: 13,
    department_id: 9,
    team_id: 6,
    title_id: 13,
  });
  await seedRow('employee_role', {
    employeeID: 14,
    department_id: 5,
    team_id: 1,
    title_id: 14,
  });
  await seedRow('employee_role', {
    employeeID: 15,
    department_id: 5,
    team_id: 1,
    title_id: 15,
  });
  await seedRow('employee_role', {
    employeeID: 16,
    department_id: 4,
    team_id: 6,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeID: 17,
    department_id: 4,
    team_id: 6,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeID: 18,
    department_id: 4,
    team_id: 6,
    title_id: 16,
  });
  await seedRow('employee_role', {
    employeeID: 19,
    department_id: 5,
    team_id: 6,
    title_id: 19,
  });
  await seedRow('employee_role', {
    employeeID: 20,
    department_id: 5,
    team_id: 2,
    title_id: 20,
  });
  await seedRow('employee_role', {
    employeeID: 21,
    department_id: 6,
    team_id: 6,
    title_id: 21,
  });
  await seedRow('employee_role', {
    employeeID: 22,
    department_id: 6,
    team_id: 6,
    title_id: 22,
  });
  await seedRow('employee_role', {
    employeeID: 23,
    department_id: 6,
    team_id: 6,
    title_id: 23,
  });
}
