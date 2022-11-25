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
  await seedRow('leave_type', { type: 'Annual Leave' });
  await seedRow('leave_type', { type: 'Sick Leave' });
  await seedRow('leave_type', { type: 'Maternity Leave' });

  await seedRow('leave_application', {
    employee_id: '12',
    leave_type: '1',
    start_date: '2022-12-14',
    start_date_period: 'full_day',
    end_date: '2022-12-15',
    end_date_period: 'full_day',
    status: 'pending',
  });
  await seedRow('leave_application', {
    employee_id: '13',
    leave_type: '2',
    start_date: '2022-11-17',
    start_date_period: 'full_day',
    end_date: '2022-11-17',
    end_date_period: 'full_day',
    status: 'taken',
  });
  await seedRow('leave_application', {
    employee_id: '14',
    leave_type: '1',
    start_date: '2022-11-01',
    start_date_period: 'full_day',
    end_date: '2022-11-01',
    end_date_period: 'full_day',
    status: 'rejected',
  });
  await seedRow('leave_application', {
    employee_id: '15',
    leave_type: '1',
    start_date: '2022-11-15',
    start_date_period: 'full_day',
    end_date: '2022-11-15',
    end_date_period: 'full_day',
    status: 'cancelled',
  });
  await seedRow('leave_application', {
    employee_id: '16',
    leave_type: '3',
    start_date: '2022-12-01',
    start_date_period: 'full_day',
    end_date: '2022-12-01',
    end_date_period: 'full_day',
    status: 'approved',
  });
  await seedRow('leave_application', {
    employee_id: '17',
    leave_type: '1',
    start_date: '2022-12-06',
    start_date_period: 'first_half',
    end_date: '2022-12-06',
    end_date_period: 'first_half',
    status: 'approved',
  });
  await seedRow('leave_application', {
    employee_id: '18',
    leave_type: '1',
    start_date: '2022-12-08',
    start_date_period: 'secnod_half',
    end_date: '2022-12-08',
    end_date_period: 'secnod_half',
    status: 'approved',
  });
  await seedRow('leave_application', {
    employee_id: '19',
    leave_type: '3',
    start_date: '2022-12-20',
    start_date_period: 'full_day',
    end_date: '2023-02-20',
    end_date_period: 'full_day',
    status: 'approved',
  });
}
