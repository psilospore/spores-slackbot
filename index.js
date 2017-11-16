var WebClient = require('@slack/client').WebClient;
var config = require('./config.json');

var token = config.SLACK_TOKEN || '';
var web = new WebClient(token);
var dailyUpdate = "Cool pic 👌👀👌👀👌👀👌👀👌👀 neato stuff neat౦ stuff👌 thats ✔ some neato👌👌stuff right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌neato stuff 🔝👀🔝👀🔝👀🔝👀🔝👀 up votes uP voTes 🔝thats ✔ some up 🔝🔝 votes front 🔝🔝page 🔝🔝🔝right✔there ✔✔if i do vote so my self 🆙 I vote so 🆙 thats what im talking about front page front page (chorus: ᶠʳᵒᶰᵗ ᵖᵃᵍᵉ) mMMMMᎷМ🆙 🔝🔝🔝 НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ🔝 🔝🔝 🔝 🆙 🔝 👀 👀 👀 🔝🔝 Up vote";

const express = require('express');

const PORT = 9000;

const app = express();

app.use(express.bodyParser());

app.post('/update', function (req, res) {
    web.chat.postMessage('spores-test', req.body.dailyUpdate, function(err, res) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Message sent: ', res);
        }
    });
    res.sendStatus(202);
});

app.listen(PORT, () => console.log(`spores server started on ${PORT}`));