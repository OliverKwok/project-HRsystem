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
  await seedRow('title', { title_name: 'CEO', dept: 'Management' });
  await seedRow('title', { title_name: 'COO', dept: 'Management' });
  await seedRow('title', { title_name: 'CFO', dept: 'Management' });
  await seedRow('title', { title_name: 'Senior Sale Manager', dept: 'Sale' });
  await seedRow('title', { title_name: 'Sales Manager', dept: 'Sale' });
  await seedRow('title', {
    title_name: 'Marketing Manager',
    dept: 'Marketing',
  });
  await seedRow('title', { title_name: 'Finance Manager', dept: 'Finance' });
  await seedRow('title', { title_name: 'Account Manager', dept: 'Finance' });
  await seedRow('title', {
    title_name: 'Social Media Specialist',
    dept: 'Marketing',
  });
  await seedRow('title', {
    title_name: 'Senior Finance Officer',
    dept: 'Finance',
  });
  await seedRow('title', { title_name: 'Sale Team Head', dept: 'Sale' });
  await seedRow('title', {
    title_name: 'Marketing Coordinator',
    dept: 'Marketing',
  });
  await seedRow('title', { title_name: 'Finance Officer', dept: 'Finance' });
  await seedRow('title', {
    title_name: 'Chinese Copywriter',
    dept: 'Marketing',
  });
  await seedRow('title', {
    title_name: 'English Copywriter',
    dept: 'Marketing',
  });
  await seedRow('title', { title_name: 'Sale Executive', dept: 'Sale' });
  await seedRow('title', { title_name: 'Secretary', dept: 'Sale' });
  await seedRow('title', { title_name: 'Programmer', dept: 'Sale' });
  await seedRow('title', { title_name: 'Designer Intern', dept: 'Marketing' });
  await seedRow('title', { title_name: 'Designer', dept: 'Marketing' });
  await seedRow('title', {
    title_name: 'Human Resource Manager',
    dept: 'Human Resource',
  });
  await seedRow('title', {
    title_name: 'Human Resource Officer',
    dept: 'Human Resource',
  });
  await seedRow('title', {
    title_name: 'Human Resource Assistant',
    dept: 'Human Resource',
  });
}
