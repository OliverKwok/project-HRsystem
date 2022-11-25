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
  await seedRow('public_holidays', {
    date: '2022-01-01',
    holiday_name: 'The first day of January',
  });
  await seedRow('public_holidays', {
    date: '2022-02-01',
    holiday_name: 'Lunar New Year Day',
  });
  await seedRow('public_holidays', {
    date: '2022-02-02',
    holiday_name: 'The second day of Lunar New Year',
  });
  await seedRow('public_holidays', {
    date: '2022-02-03',
    holiday_name: 'The third day of Lunar New Year',
  });
  await seedRow('public_holidays', {
    date: '2022-04-05',
    holiday_name: 'Ching Ming Festival',
  });
  await seedRow('public_holidays', {
    date: '2022-04-15',
    holiday_name: 'Good Friday',
  });
  await seedRow('public_holidays', {
    date: '2022-04-16',
    holiday_name: 'The day following Good Friday',
  });
  await seedRow('public_holidays', {
    date: '2022-04-18',
    holiday_name: 'Easter Monday',
  });
  await seedRow('public_holidays', {
    date: '2022-05-02',
    holiday_name: 'The day following Labour Day',
  });
  await seedRow('public_holidays', {
    date: '2022-05-09',
    holiday_name: 'The day following the Birthday of the Buddha',
  });
  await seedRow('public_holidays', {
    date: '2022-06-03',
    holiday_name: 'Tuen Ng Festival',
  });
  await seedRow('public_holidays', {
    date: '2022-07-01',
    holiday_name: 'Hong Kong Special Administrative Region Establishment Day',
  });
  await seedRow('public_holidays', {
    date: '2022-09-12',
    holiday_name: 'The second day following the Chinese Mid-Autumn Festival',
  });
  await seedRow('public_holidays', {
    date: '2022-10-01',
    holiday_name: 'National Day',
  });
  await seedRow('public_holidays', {
    date: '2022-10-04',
    holiday_name: 'Chung Yeung Festival',
  });
  await seedRow('public_holidays', {
    date: '2022-12-26',
    holiday_name: 'The first weekday after Christmas Day',
  });
  await seedRow('public_holidays', {
    date: '2022-12-27',
    holiday_name: 'The second weekday after Christmas Day',
  });
  await seedRow('public_holidays', {
    date: '2023-01-02',
    holiday_name: 'The day following the first day of January',
  });
  await seedRow('public_holidays', {
    date: '2023-01-23',
    holiday_name: 'The second day of Lunar New Year',
  });
  await seedRow('public_holidays', {
    date: '2023-01-24',
    holiday_name: 'The third day of Lunar New Year',
  });
  await seedRow('public_holidays', {
    date: '2023-01-25',
    holiday_name: 'The fourth day of Lunar New Year',
  });
  await seedRow('public_holidays', {
    date: '2023-04-05',
    holiday_name: 'Ching Ming Festival',
  });
  await seedRow('public_holidays', {
    date: '2023-04-07',
    holiday_name: 'Good Friday',
  });
  await seedRow('public_holidays', {
    date: '2023-04-08',
    holiday_name: 'The day following Good Friday',
  });
  await seedRow('public_holidays', {
    date: '2023-04-10',
    holiday_name: 'Easter Monday',
  });
  await seedRow('public_holidays', {
    date: '2023-05-01',
    holiday_name: 'Labour Day',
  });
  await seedRow('public_holidays', {
    date: '2023-05-26',
    holiday_name: 'The Birthday of the Buddha',
  });
  await seedRow('public_holidays', {
    date: '2023-06-22',
    holiday_name: 'Tuen Ng Festival',
  });
  await seedRow('public_holidays', {
    date: '2023-07-01',
    holiday_name: 'Hong Kong Special Administrative Region Establishment Day',
  });
  await seedRow('public_holidays', {
    date: '2023-09-30',
    holiday_name: 'The day following the Chinese Mid-Autumn Festival',
  });
  await seedRow('public_holidays', {
    date: '2023-10-02',
    holiday_name: 'The day following National Day',
  });
  await seedRow('public_holidays', {
    date: '2023-10-23',
    holiday_name: 'Chung Yeung Festival',
  });
  await seedRow('public_holidays', {
    date: '2023-12-25',
    holiday_name: 'Christmas Day',
  });
  await seedRow('public_holidays', {
    date: '2023-12-26',
    holiday_name: 'The first weekday after Christmas Day',
  });
}
