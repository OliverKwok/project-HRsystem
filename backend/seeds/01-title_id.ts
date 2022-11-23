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
  await seedRow('title', { title_name: 'CEO', dept: '1' });
  await seedRow('title', { title_name: 'COO', dept: '1' });
  await seedRow('title', { title_name: 'CFO', dept: '1' });
  await seedRow('title', { title_name: 'Senior Sale Manager', dept: '4' });
  await seedRow('title', { title_name: 'Sales Manager', dept: '4' });
  await seedRow('title', { title_name: 'Marketing Manager', dept: '5' });
  await seedRow('title', { title_name: 'Finance Manager', dept: '9' });
  await seedRow('title', { title_name: 'Account Manager', dept: '9' });
  await seedRow('title', { title_name: 'Social Media Specialist', dept: '5' });
  await seedRow('title', { title_name: 'Senior Finance Officer', dept: '9' });
  await seedRow('title', { title_name: 'Sale Team Head', dept: '4' });
  await seedRow('title', { title_name: 'Marketing Coordinator', dept: '5' });
  await seedRow('title', { title_name: 'Finance Officer', dept: '9' });
  await seedRow('title', { title_name: 'Chinese Copywriter', dept: '5' });
  await seedRow('title', { title_name: 'English Copywriter', dept: '5' });
  await seedRow('title', { title_name: 'Sale Executive', dept: '4' });
  await seedRow('title', { title_name: 'Secretary', dept: '4' });
  await seedRow('title', { title_name: 'Programmer', dept: '4' });
  await seedRow('title', { title_name: 'Designer Intern', dept: '5' });
  await seedRow('title', { title_name: 'Designer', dept: '5' });
  await seedRow('title', { title_name: 'Human Resource Manager', dept: '6' });
  await seedRow('title', { title_name: 'Human Resource Officer', dept: '6' });
  await seedRow('title', { title_name: 'Human Resource Assistant', dept: '6' });
}
