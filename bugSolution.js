```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("<database>");
    const collection = db.collection("<collection>");

    // Correct update operation with upsert option
    const result = await collection.updateOne({ "_id": 1 }, { $set: { "field": "newValue" } }, { upsert: true });

    console.log(result);
  } finally {
    await client.close();
  }
}

updateDocument();
```