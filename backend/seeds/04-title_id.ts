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
  await seedRow('title', { title_name: 'Director' });
  await seedRow('title', { title_name: 'CEO' });
  await seedRow('title', { title_name: 'CFO' });
  await seedRow('title', { title_name: 'Senior Sale Manager' });
  await seedRow('title', { title_name: 'Sales Manager' });
  await seedRow('title', { title_name: 'Marketing Manager' });
  await seedRow('title', { title_name: 'Finance Manager' });
  await seedRow('title', { title_name: 'Account Manager' });
  await seedRow('title', { title_name: 'Social Media Specialist' });
  await seedRow('title', { title_name: 'Senior Analyst' });
  await seedRow('title', { title_name: 'Sale Team Head' });
  await seedRow('title', { title_name: 'Marketing Coodinator' });
  await seedRow('title', { title_name: 'Analyst' });
  await seedRow('title', { title_name: 'Chinese Copywriter' });
  await seedRow('title', { title_name: 'English Copywriter' });
  await seedRow('title', { title_name: 'Sale Executive' });
  await seedRow('title', { title_name: 'Secretary' });
  await seedRow('title', { title_name: 'Programmer' });
  await seedRow('title', { title_name: 'Designer Intern' });
  await seedRow('title', { title_name: 'Designer' });

  await seedRow('title', { title_name: 'Human Resource Manager' });
  await seedRow('title', { title_name: 'Human Resources Officer' });
  await seedRow('title', { title_name: 'Human Resource Assistant' });
}
