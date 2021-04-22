import { createConnection, Connection, getConnectionOptions } from 'typeorm'

export const connect = async (): Promise<void> => {
  const defaultOptions = await getConnectionOptions();

  await createConnection(defaultOptions);
}