import { time } from 'console';
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('employee', (table) => {
    table.increments('id').primary();
    // personal identification details
    table.string('employeeid');
    table.string('first_name');
    table.string('last_name');
    table.string('chinese_name');
    table.string('alias');
    table.string('hkid');
    table.string('passport');
    table.enu('gender', ['M', 'F']);
    table.string('nationality');
    table.date('date_of_birth');
    // table.integer('age');
    table.string('profilepic');
    // personal contact details + mobile app acct
    table.string('mobile_countrycode');
    table.string('mobile_no');
    table.string('work_phone_no');
    table.string('email_personal');
    table.string('email_work');
    table.string('password'); //first psw = bday
    // background
    table.string('highest_education');
    table.string('institution_name');
    table.string('major');
    table.string('last_job_company');
    table.string('last_job_title');
    // work
    table.date('start_date');
    // table.boolean('have_probation');
    // table.boolean('pass_probation');
    table.enu('status', [
      'probation',
      'perm',
      'contract',
      'terminated',
      'resigned',
      'retired',
      'other',
    ]);
    table.date('contract_end_date');
    table.date('probation_end_date');
    table.enu('job_nature', [
      'full_time',
      'part_time',
      'temp',
      'intern',
      'other',
    ]);
    table.float('length_of_service').unsigned();
    table.integer('notice_period');
    // table.integer('department_id').references('department.id');
    // table.integer('team_id').references('team.id');
    // table.integer('grade_id').references('grade.id');
    // table.integer('title_id').references('title.id');
    table.integer('report_to').references('employee.id');
    // payroll
    table.enu('pay_currency', ['HKD', 'USD', 'RMB', 'other']);
    table.float('basic_salary');
    table.enu('payment_method', ['bank_transfer', 'cheque', 'cash', 'other']);
    table.string('home_address');
    table.string('bank_code');
    table.string('bank_name');
    table.string('bank_number');
    table.string('bank_payee');
    table.string('payment_remark');
    // leave
    table.float('al_leave_entitled_peryear');
    table.float('al_leave_taken');
    table.float('al_leave_balance');
    table.float('sick_leave_taken');
    table.float('sick_leave_balance');
    // system permission
    // table.integer('permission').references('permission.id');
  });
  await knex.schema.createTable('title', (table) => {
    table.increments('id');
    table.string('title_name');
    table.string('dept');
    // table.integer('grade_id').references('grade.id');
    table.string('office_hour_start');
    table.string('office_hour_end');
  });
  // company structure: department, team, grade, title
  await knex.schema.createTable('department', (table) => {
    table.increments('id');
    table.string('dept_name');
    table.integer('head_of_dept').references('employee.id');
    table.integer('managed_by').references('title.id');
    // table.integer('dept_upstream').references('department.id');
    // table.integer('dept_downstream').references('department.id');
  });

  await knex.schema.createTable('team', (table) => {
    table.increments('id');
    table.string('team_name');
    table.integer('team_lead').references('employee.id');
    table.integer('belonged_to_dept').references('department.id');
    table.integer('team_upstream').references('team.id');
    // table.integer('report_to').references('employee.employeeid');
  });

  // await knex.schema.createTable('grade', (table) => {
  //   table.increments('id');
  //   table.string('grade_name');
  //   table.integer('al_days_entitled');
  //   table.integer('years_of_service');
  //   table.integer('notice_period(month)');
  // });

  // hr system permission
  await knex.schema.createTable('permission', (table) => {
    table.increments('id');
    table.string('level');
  });

  // employee role, referencing tables above
  await knex.schema.createTable('employee_role', (table) => {
    table.increments('id');
    table.integer('employeeid').references('employee.id');
    table.integer('department_id').references('department.id');
    table.integer('team_id').references('team.id');
    // table.integer('grade_id').references('grade.id');
    table.integer('title_id').references('title.id');
    // table.integer('report_to').references('employee.id');
    table.integer('permission').references('permission.id');
  });

  // leave: leave_type, leave_company_setting, leave_application, public holidays
  await knex.schema.createTable('leave_type', (table) => {
    table.increments('id');
    table.string('type');
  });

  await knex.schema.createTable('leave_setting', (table) => {
    table.increments('id');
    table.string('company_name');
    table.string('al_clearance_day');
    table.boolean('al_carried_forward');
  });

  await knex.schema.createTable('leave_application', (table) => {
    table.increments('id');
    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
    table.dateTime('updated_at');
    table.integer('employee_id').references('employee.id');
    table.integer('leave_type').references('leave_type.id');
    table.date('start_date');
    table.enu('start_date_period', ['full_day', 'first_half', 'second_half']);
    table.date('end_date');
    table.enu('end_date_period', ['full_day', 'first_half', 'second_half']);
    table.float('number_of_days');
    table.enu('status', [
      'pending',
      'approved',
      'rejected',
      'cancelled',
      'taken',
    ]);
    table.integer('approved_by').references('employee.id');
  });

  await knex.schema.createTable('public_holidays', (table) => {
    table.increments('id');
    table.date('date');
    table.string('holiday_name');
  });

  // attendance

  await knex.schema.createTable('attendance', (table) => {
    table.increments('id');
    table.integer('employee').references('employee.id');
    table.date('date');
    table.timestamp('time_checkedin');
    table.timestamp('time_checkedout');
    table.enu('status', [
      'punctual',
      'late',
      'onleave',
      'onbustrip',
      'remote',
      'unknonwn',
      'other',
    ]);
  });

  // payroll
  await knex.schema.createTable('payroll_dates', (table) => {
    table.increments('id');
    table.integer('year');
    table.date('pay_day');
  });

  await knex.schema.createTable('payroll', (table) => {
    table.increments('id');
    table.integer('year');
    table.integer('month');
    table.integer('employee').references('employee.id');
    table.float('salary');
    table.float('ot_pay');
    table.float('bonus');
    table.float('nopay_leave');
    table.float('mpf_employee');

    table.float('mpf_employer');
    table.float('total');
  });

  await knex.schema.createTable('payroll_edit_history', (table) => {
    table.increments('id');
    table.integer('year');
    table.integer('month');
    table.integer('employeeid').references('employee.id');
    table.float('ot_pay');
    table.float('bonus');
    table.float('nopay_leave');
    table.timestamp('updated_datetime');

    table.boolean('isApproved');
  });

  // termination
  await knex.schema.createTable('termination', (table) => {
    table.increments('id');
    table.integer('employee').references('employee.id');
    // table.integer('employee_report_to').references('employee.id');
    table.enu('type', ['resignation', 'termination']);
    table.date('date_applied');
    table.date('date_effective');
    table.date('date_lastday');
    table.boolean('is_within_notice_period');
    table.float('compensation');
    // table.float('leave_balance');
    table.float('leave_inlieu');
    table.float('severance_pay');
  });

  // notification
  await knex.schema.createTable('notification', (table) => {
    table.increments('id');
    table.date('date');
    table.time('time');
    table.string('message');
    table.enu('message_type', [
      'payslip',
      'leaveAppStatus',
      'company',
      'other',
    ]);
    table.integer('recipient').references('employee.id');
  });

  await knex.schema.createTable('event', (table) => {
    table.increments('id');
    table.string('event_name');
    table.date('date');
    table.string('details');
  });
}

// knex down
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('event');
  await knex.schema.dropTableIfExists('notification');
  await knex.schema.dropTableIfExists('termination');
  await knex.schema.dropTableIfExists('payroll_edit_history');
  await knex.schema.dropTableIfExists('payroll');
  await knex.schema.dropTableIfExists('payroll_dates');
  await knex.schema.dropTableIfExists('attendance');
  await knex.schema.dropTableIfExists('public_holidays');
  await knex.schema.dropTableIfExists('leave_application');
  await knex.schema.dropTableIfExists('leave_setting');
  await knex.schema.dropTableIfExists('leave_type');
  await knex.schema.dropTableIfExists('employee_role');
  await knex.schema.dropTableIfExists('permission');
  // await knex.schema.dropTableIfExists('grade');
  await knex.schema.dropTableIfExists('team');
  await knex.schema.dropTableIfExists('department');
  await knex.schema.dropTableIfExists('title');
  await knex.schema.dropTableIfExists('employee');
}
