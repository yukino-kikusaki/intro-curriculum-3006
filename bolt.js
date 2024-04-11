'use strict';
const bolt = require('@slack/bolt');
const dotenv = require ('dotenv');
dotenv.config();

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/hello/i, ({message, say}) => {
  say('こんにちは！');
});

app.message('おみくじ',({message, say}) =>{
  const lots = ['大吉','吉','中吉','末吉','凶'];
  const lot = lots[Math.floor(Math.random() * lots.length)];
  say(`${lot},<@${message.user}>`);
});

app.start();
