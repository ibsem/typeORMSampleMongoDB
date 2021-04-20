import { Connection, createConnection } from 'typeorm';
const connectionDatabase = async () => {
  try {
    const connection: Connection = await createConnection();
    console.log(`📦 Successfully connected with database`),
      process.on('SIGINT', () => {
        connection
          .close()
          .then(() => console.log('database connection closed'));
      });
  } catch (error) {
    console.log(error);
  }
};

export default connectionDatabase;