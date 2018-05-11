import * as config from 'config';
import * as mongoose from 'mongoose';

export const connectToDb: () => void = (): void => {
  const { host } = config.get('dbConfig') as { host: string };
  const dbConnection: mongoose.Connection = mongoose.connection;
  mongoose.connect(host);
  /* tslint:disable */
  dbConnection.on('error', (err: Error) => console.log(`db connect error  ${err}`));
  dbConnection.once('open', () => console.log(`db open connection`));
  dbConnection.once('close', () => console.log(`db close connection`));
  /* tslint:enable */
};
