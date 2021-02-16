const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const HealthDeclareModel = require('./models/HealthDeclaration');

app.use(cors());
app.use(express.json());

require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true }, () => {
    console.log('connected to MongoDb');
});

app.post('/', async (req, res) => {
    const fullName = req.body.fullName;
    const phone = req.body.phone;
    const position = req.body.position;
    const question1a = req.body.question1a;
    const question1b = req.body.question1b;
    const question1c = req.body.question1c;
    const question2 = req.body.question2;
    const question3 = req.body.question3;
    const question4 = req.body.question4;
    const question5 = req.body.question5;

    const healthDeclare = new HealthDeclareModel({
        fullName: fullName,
        phone: phone,
        position: position,
        question1a: question1a,
        question1b: question1b,
        question1c: question1c,
        question2: question2,
        question3: question3,
        question4: question4,
        question5: question5
    });

    try {
        await healthDeclare.save();
        res.send('inserted');
    } catch (err) {
        console.log(err);
    }
});

app.get('/result', (req, res) => {
    HealthDeclareModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }
        res.send(result);
    })
});

app.listen(3001, () => {
    console.log('connected on port 3001');
});