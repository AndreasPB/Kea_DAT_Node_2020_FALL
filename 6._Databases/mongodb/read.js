const MongoClient = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, (error, client) => {
    if (error) throw new Error(error);

    const memes = client.db("memes");

    const favorites = memes.collection("favorites");

    favorites.find({ person: "Obi Wan" }).toArray((error, foundFavorites) => {
        if (error) throw new Error(error);

        console.log(foundFavorites);
        client.close();
    });

});
