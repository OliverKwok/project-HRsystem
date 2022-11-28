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

  await seedRow('team', { team_name: 'Not in Team' });
  await seedRow('team', {
    team_name: 'Team A',
    team_lead: 9,
    belonged_to_dept: 5,
  });
  await seedRow('team', {
    team_name: 'Team B',
    team_lead: 12,
    belonged_to_dept: 5,
  });
  await seedRow('team', { team_name: 'Team C' });
  await seedRow('team', { team_name: 'Team D' });
  await seedRow('team', { team_name: 'Team E' });
}
