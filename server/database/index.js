const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const config = require('./config');
const userModel = require('../routes/users/user.model');

// Exit application on error
// mongoose.connection.on('error', err => {
//   console.log(`MongoDB connection error: ${err}`);

//   // process.exit(-1)
// });

const connectWithRetry = () => {
  // mongoose
  //   .connect(config.url, { useNewUrlParser: true })
  //   .then(res => {
  //     console.log('connected to DB');
  //   })
  //   .catch(err => {
  //     console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
  //     setTimeout(connectWithRetry, 5000);
  //   });
  MongoClient.connect(
    config.url,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      const database = client.db('post');
      database.createCollection('user', userModel);
      database.createCollection('task');
      database.createCollection('vote');
      console.log('Connected to !');
    }
  );
};

connectWithRetry();

// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */

//   const client = new MongoClient(config.url);

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();

//     // Make the appropriate DB calls
//     // await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.err);

// async function listDatabases(client) {
//   databasesList = await client
//     .db()
//     .admin()
//     .listDatabases();

//   console.log('Databases:');
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// }
