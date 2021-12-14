import config from 'config';
// import { dbConfig } from '@interfaces/db.interface';

const { host, port, database } = config.get('dbConfig');

export const dbConnectionMongo = {
  url: `mongodb://${host}:${port}/${database}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
