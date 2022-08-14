const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://zerobala:zerobala@ac-nrb3wf8-shard-00-00.sbq9mvc.mongodb.net:27017,ac-nrb3wf8-shard-00-01.sbq9mvc.mongodb.net:27017,ac-nrb3wf8-shard-00-02.sbq9mvc.mongodb.net:27017/?ssl=true&replicaSet=atlas-sgo7ch-shard-0&authSource=admin&retryWrites=true&w=majority",
    (error) =>
        error ? console.log("deu ruim o mongo") : console.log("deu bom o mongo")
);
