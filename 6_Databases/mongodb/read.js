const MongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) throw new Error(error);

    const memes = client.db("memes");

    const disliked = memes.collection("disliked");

    disliked.find({type: "old memes"}.toArray((error, result) => {
        if (error) throw new Error(error);
        console.log(result);
        client.close();
    }));
}));