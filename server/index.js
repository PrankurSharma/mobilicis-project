const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
var cacheService = require("express-api-cache"); //library used for caching
var cache = cacheService.cache;

let port = process.env.PORT || 3001;

const dataModel = require("./models/dataModel");

app.use(express.json());
app.use(cors());

//data cached in the server for 2 hours and then refreshed to get new data from database

app.use(cache('120 minutes'));

mongoose.connect(process.env.LINK, {
    useNewUrlParser: true
});

app.get("/read1", async (req, res) => {
    const result = await dataModel.find({
        '$and': [
            {
                'income': {
                    '$lt': '$5'
                }
            }, {
                '$or': [
                    {
                        'car': 'BMW'
                    }, {
                        'car': 'Mercedes-Benz'
                    }
                ]
            }
        ]
    });
    res.send(result);
});

app.get("/read2", async (req, res) => {
    const result = await dataModel.find({
        '$and': [
            {
                'gender': 'Male'
            }, {
                'phone_price': {
                    '$gt': '10000'
                }
            }
        ]
    });
    res.send(result);
});

app.get("/read3", async (req, res) => {
    const result = await dataModel.find({
        '$and': [
            {
                'last_name': new RegExp('^M')
            }, {
                '$expr': {
                    '$gt': [
                        {
                            '$strLenCP': '$quote'
                        }, 15
                    ]
                }
            }, {
                '$expr': {
                    '$regexMatch': {
                        'input': '$email',
                        'regex': '$last_name',
                        'options': 'i'
                    }
                }
            }
        ]
    });
    res.send(result);
});

app.get("/read4", async (req, res) => {
    const result = await dataModel.find({
        '$and': [
            {
                '$or': [
                    {
                        'car': 'BMW'
                    }, {
                        'car': 'Mercedes-Benz'
                    }, {
                        'car': 'Audi'
                    }
                ]
            }, {
                'email': {
                    '$not': {
                        '$regex': '[0-9]+'
                    }
                }
            }
        ]
    });
    res.send(result);
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});