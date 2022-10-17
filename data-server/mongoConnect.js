const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_URI_ATLAS =
  'mongodb+srv://suji:mtn191371wl@cluster-Weblog.fbcyo6s.mongodb.net/?retryWrites=true&w=majority';

const uri = DB_URI_ATLAS;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
