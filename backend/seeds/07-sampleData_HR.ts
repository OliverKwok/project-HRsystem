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
  await seedRow('employee', {
    employeeID: 'DEMO021',
    first_name: 'Tse Ching',
    last_name: 'Chan',
    chinese_name: '陳梓晴',
    alias: 'Connie',
    HKID: 'X832543(3)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1992-01-12',
    age: '30',
    start_date: '2016-04-01',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 2,
    AL_leave_entitled: '14',
    pay_currency: 'HKD',
    basic_salary: '43000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 12, 32/F, Mei Ka Court, South Horizons, Ap Lei Chau',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '524-512303-516',
    bank_payee: 'Chan Tse Ching',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO022',
    first_name: 'Yu Tung',
    last_name: 'Lee',
    chinese_name: '李雨桐',
    alias: 'Rachel',
    HKID: 'Y218524(3)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '2000-04-01',
    age: '22',
    start_date: '2018-08-24',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 2,
    AL_leave_entitled: '10',
    pay_currency: 'HKD',
    basic_salary: '32000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 8, 3/F, Hang Wo House, Tai Wo Estate, Tai Po',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '612-513213-521',
    bank_payee: 'Lee Yu Tung',
    payment_remark: 'NA',
  });
  await seedRow('employee', {
    employeeID: 'DEMO023',
    first_name: 'Tse Ki',
    last_name: 'Cheung',
    chinese_name: '張子琪',
    alias: 'Sophia',
    HKID: 'Z851361(7)',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1999-08-24',
    age: '23',
    start_date: '2018-03-17',
    have_probation: 'TRUE',
    pass_probation: 'TRUE',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 2,
    AL_leave_entitled: '8',
    pay_currency: 'HKD',
    basic_salary: '27000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 23, 35/F, Yee Hau House, Yee Nga Court, Tai Po',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '212-231424-324',
    bank_payee: 'Cheung Tse Ki',
    payment_remark: 'NA',
  });

  await seedRow('employee_role', {
    employeeID: 21,
    department_id: 6,
    team_id: 1,
    grade_id: 4,
    title_id: 21,
  });
  await seedRow('employee_role', {
    employeeID: 22,
    department_id: 6,
    team_id: 1,
    grade_id: 5,
    title_id: 22,
  });
  await seedRow('employee_role', {
    employeeID: 23,
    department_id: 6,
    team_id: 1,
    grade_id: 6,
    title_id: 23,
  });
}
