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
  await seedRow('leave_type', { type: 'Covid Leave' });
  await seedRow('leave_type', { type: 'Maternity Leave' });
  await seedRow('leave_type', { type: 'No Pay Leave' });
  await seedRow('leave_type', { type: 'Work From Home' });

  await seedRow('leave_application', {
    employee_id: 1,
    leave_type: '2',
    start_date: '2022-11-22',
    start_date_period: 'full_day',
    end_date: '2022-11-24',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 3,
  });
  await seedRow('leave_application', {
    employee_id: 1,
    leave_type: '1',
    start_date: '2022-11-17',
    start_date_period: 'full_day',
    end_date: '2022-11-17',
    end_date_period: 'full_day',
    status: 'rejected',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 1,
    leave_type: '1',
    start_date: '2022-11-30',
    start_date_period: 'full_day',
    end_date: '2022-11-30',
    end_date_period: 'full_day',
    status: 'cancelled',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 1,
    leave_type: '1',
    start_date: '2022-12-20',
    start_date_period: 'full_day',
    end_date: '2022-12-22',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 3,
  });

  await seedRow('leave_application', {
    employee_id: 2,
    leave_type: '1',
    start_date: '2022-10-21',
    start_date_period: 'full_day',
    end_date: '2022-10-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 2,
    leave_type: '1',
    start_date: '2022-10-31',
    start_date_period: 'full_day',
    end_date: '2022-10-31',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 2,
    leave_type: '1',
    start_date: '2022-12-23',
    start_date_period: 'full_day',
    end_date: '2022-12-23',
    end_date_period: 'full_day',
    status: 'approved',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 2,
    leave_type: '1',
    start_date: '2022-12-29',
    start_date_period: 'full_day',
    end_date: '2022-12-30',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 2,
  });

  await seedRow('leave_application', {
    employee_id: 3,
    leave_type: '2',
    start_date: '2022-11-22',
    start_date_period: 'full_day',
    end_date: '2022-11-23',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 2,
  });
  await seedRow('leave_application', {
    employee_id: 3,
    leave_type: '1',
    start_date: '2022-11-30',
    start_date_period: 'full_day',
    end_date: '2022-11-30',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 3,
    leave_type: '1',
    start_date: '2022-12-19',
    start_date_period: 'full_day',
    end_date: '2022-12-23',
    end_date_period: 'full_day',
    status: 'approved',
    number_of_days: 5,
  });
  await seedRow('leave_application', {
    employee_id: 3,
    leave_type: '1',
    start_date: '2022-01-04',
    start_date_period: 'first_half',
    end_date: '2022-01-04',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 0.5,
  });

  await seedRow('leave_application', {
    employee_id: 4,
    leave_type: '2',
    start_date: '2022-11-14',
    start_date_period: 'full_day',
    end_date: '2022-11-14',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 4,
    leave_type: '1',
    start_date: '2022-11-18',
    start_date_period: 'full_day',
    end_date: '2022-11-18',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 4,
    leave_type: '1',
    start_date: '2022-12-09',
    start_date_period: 'full_day',
    end_date: '2022-12-09',
    end_date_period: 'full_day',
    status: 'approved',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 4,
    leave_type: '1',
    start_date: '2022-12-28',
    start_date_period: 'full_day',
    end_date: '2022-12-30',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 3,
  });

  await seedRow('leave_application', {
    employee_id: 5,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 5,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 5,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 5,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 6,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 6,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 6,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 6,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 7,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 7,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 7,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 7,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 8,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 8,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 8,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 8,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 9,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 9,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 9,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 9,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 10,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 10,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 10,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 10,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 11,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 11,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 11,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 11,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 12,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 12,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 12,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 12,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 13,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 13,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 13,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 13,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '1',
    start_date: '2022-10-14',
    start_date_period: 'first_half',
    end_date: '2022-10-14',
    end_date_period: 'first_half',
    status: 'taken',
    number_of_days: 0.5,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '1',
    start_date: '2022-10-26',
    start_date_period: 'full_day',
    end_date: '2022-10-27',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 2,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '2',
    start_date: '2022-11-07',
    start_date_period: 'full_day',
    end_date: '2022-11-09',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 3,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '2',
    start_date: '2022-11-21',
    start_date_period: 'second_half',
    end_date: '2022-11-21',
    end_date_period: 'second_half',
    status: 'taken',
    number_of_days: 0.5,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '1',
    start_date: '2022-12-19',
    start_date_period: 'full_day',
    end_date: '2022-12-19',
    end_date_period: 'full_day',
    status: 'approved',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '1',
    start_date: '2022-12-23',
    start_date_period: 'full_day',
    end_date: '2022-12-23',
    end_date_period: 'full_day',
    status: 'approved',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '1',
    start_date: '2022-12-30',
    start_date_period: 'full_day',
    end_date: '2022-12-31',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 2,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '1',
    start_date: '2022-01-12',
    start_date_period: 'full_day',
    end_date: '2022-01-13',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 2,
  });
  await seedRow('leave_application', {
    employee_id: 14,
    leave_type: '1',
    start_date: '2022-01-26',
    start_date_period: 'full_day',
    end_date: '2022-01-27',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 2,
  });

  await seedRow('leave_application', {
    employee_id: 15,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 15,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 15,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 15,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 16,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 16,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 16,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 16,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 17,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 17,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 17,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 17,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 18,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 18,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 18,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 18,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 19,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 19,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 19,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 19,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 20,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 20,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 20,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 20,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 21,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 21,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 21,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 21,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 22,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 22,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 22,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 22,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });

  await seedRow('leave_application', {
    employee_id: 23,
    leave_type: '1',
    start_date: '2022-11-11',
    start_date_period: 'full_day',
    end_date: '2022-11-11',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 23,
    leave_type: '1',
    start_date: '2022-11-21',
    start_date_period: 'full_day',
    end_date: '2022-11-21',
    end_date_period: 'full_day',
    status: 'taken',
    number_of_days: 1,
  });
  await seedRow('leave_application', {
    employee_id: 23,
    leave_type: '1',
    start_date: '2022-12-15',
    start_date_period: 'full_day',
    end_date: '2022-12-16',
    end_date_period: 'first_half',
    status: 'pending',
    number_of_days: 1.5,
  });
  await seedRow('leave_application', {
    employee_id: 23,
    leave_type: '1',
    start_date: '2022-12-21',
    start_date_period: 'full_day',
    end_date: '2022-12-21',
    end_date_period: 'full_day',
    status: 'pending',
    number_of_days: 1,
  });
}
