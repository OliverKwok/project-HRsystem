import {config} from 'dotenv';

config();

export const env = {
  REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
};
