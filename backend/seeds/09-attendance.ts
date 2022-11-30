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
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-01',
    time_checkedin: '2022-11-01 09:00:00',
    time_checkedout: '2022-11-01 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-02',
    time_checkedin: '2022-11-02 09:00:00',
    time_checkedout: '2022-11-02 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-03',
    time_checkedin: '2022-11-03 09:00:00',
    time_checkedout: '2022-11-03 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-04',
    time_checkedin: '2022-11-04 09:00:00',
    time_checkedout: '2022-11-04 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-07',
    time_checkedin: '2022-11-07 09:00:00',
    time_checkedout: '2022-11-07 18:00:00',
    status: 'onleave',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-08',
    time_checkedin: '2022-11-08 09:00:00',
    time_checkedout: '2022-11-08 18:00:00',
    status: 'onleave',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-09',
    time_checkedin: '2022-11-09 09:00:00',
    time_checkedout: '2022-11-09 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-10',
    time_checkedin: '2022-11-10 09:00:00',
    time_checkedout: '2022-11-10 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-11',
    time_checkedin: '2022-11-11 09:00:00',
    time_checkedout: '2022-11-11 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-14',
    time_checkedin: '2022-11-14 09:00:00',
    time_checkedout: '2022-11-14 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-15',
    time_checkedin: '2022-11-15 09:00:00',
    time_checkedout: '2022-11-15 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-16',
    time_checkedin: '2022-11-16 09:00:00',
    time_checkedout: '2022-11-16 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-17',
    time_checkedin: '2022-11-17 09:30:00',
    time_checkedout: '2022-11-17 18:00:00',
    status: 'late',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-18',
    time_checkedin: '2022-11-18 09:00:00',
    time_checkedout: '2022-11-18 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-21',
    time_checkedin: '2022-11-21 09:00:00',
    time_checkedout: '2022-11-21 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-22',
    time_checkedin: '2022-11-22 09:00:00',
    time_checkedout: '2022-11-22 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-23',
    time_checkedin: '2022-11-23 09:00:00',
    time_checkedout: '2022-11-23 18:00:00',
    status: 'remote',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-24',
    time_checkedin: '2022-11-24 09:00:00',
    time_checkedout: '2022-11-24 18:00:00',
    status: 'remote',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-25',
    time_checkedin: '2022-11-25 09:00:00',
    time_checkedout: '2022-11-25 18:00:00',
    status: 'remote',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-28',
    time_checkedin: '2022-11-28 09:00:00',
    time_checkedout: '2022-11-28 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-29',
    time_checkedin: '2022-11-29 09:00:00',
    time_checkedout: '2022-11-29 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-11-30',
    time_checkedin: '2022-11-30 09:00:00',
    time_checkedout: '2022-11-30 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-12-01',
    time_checkedin: '2022-12-01 09:00:00',
    time_checkedout: '2022-12-01 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-12-02',
    time_checkedin: '2022-12-02 09:30:00',
    time_checkedout: '2022-12-02 18:00:00',
    status: 'late',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-12-05',
    time_checkedin: '2022-12-05 09:00:00',
    time_checkedout: '2022-12-05 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-12-06',
    time_checkedin: '2022-12-06 09:00:00',
    time_checkedout: '2022-12-06 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-12-07',
    time_checkedin: '2022-12-07 09:00:00',
    time_checkedout: '2022-12-07 18:00:00',
    status: 'punctual',
  });
  await seedRow('attendance', {
    employee: '21',
    date: '2022-12-08',
    time_checkedin: '2022-12-08 09:00:00',
    time_checkedout: '2022-12-08 18:00:00',
    status: 'punctual',
  });
}
