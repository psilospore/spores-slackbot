# spores-slackbot


A slackbot server that takes a response in the following format and posts a formatted message on a channel of you choice

```
{
    "Name": "Sprint Name",
    "Start": "1510709340000",
    "End": "1511918940000",
    "CompletedPoints": 1.0,
    "TotalPoints": 36.0,
    "StoriesCount": 7,
    "BugsCount": 6
}

```


You do need a config file in the following format:


```
{
    "SLACK_TOKEN": "SUPER-SECRET-TOKEN",
    "channel": "some-channel"
}
```