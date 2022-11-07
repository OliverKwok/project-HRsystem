import dotenv from 'dotenv';
import Knex from 'knex';

dotenv.config({ path: './.env' });

let profiles = require('./knexfile');
let profile = profiles.development;

console.log(profile);

export let knex = Knex(profile);
