const WebClient = require('@slack/client').WebClient;
const config = require('./config.json');
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

var token = config.SLACK_TOKEN;
var web = new WebClient(token);

const PORT = 9000;

const app = express();

app.use(bodyParser());

app.post('/dailyupdate', function (req, res) {
    const {
        Name,
        Start,
        End,
        CompletedPoints,
        TotalPoints,
        BugsCount
    } = req.body;

    var endDate = moment(Number(End));

    const message = `
        Step up the sprint ends on ${endDate.format('MM/DD')} you have ${endDate.fromNow()} left
        we have completed ${CompletedPoints} out of ${TotalPoints} points
        and we have ${BugsCount} bugs
    `;

    web.chat.postMessage(config.channel, message).then((err, res) => {
        console.log(req.body)
        if (err) {
            console.log('Error:', err);
        } else {
            console.log('Message sent: ', res);
        }
    });
    res.sendStatus(202);
});

app.listen(PORT, () => console.log(`spores server started on ${PORT}`));