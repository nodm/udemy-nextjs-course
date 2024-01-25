import { MongoClient, ServerApiVersion } from 'mongodb';

const MONGODB_URI = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

export async function connectDatabase() {
  const client = new MongoClient(MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  }).connect();

  return client;
}

export async function getAllDocuments(client, collection, query = {}, options = {}) {
  const db = client.db();

  const documents = await db.collection(collection)
    .find(query, options)
    .toArray();

  return documents;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  await db.collection(collection).insertOne(document);
}
