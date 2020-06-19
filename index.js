const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const app = express();

global.usersFileName = 'users.json';
global.logsFileName = 'logs.json';

app.use(express.json());
app.use(cors());

app.post('/', async (req, res) => {
  try {
    //load users data from json
    let dataUser = await fs.readFile(global.usersFileName, 'utf8');
    let jsonUser = JSON.parse(dataUser);

    //load logs data from json
    let data = await fs.readFile(global.logsFileName, 'utf8');
    let json = JSON.parse(data);

    //let random user here
    var RandomUserArray = jsonUser.users;
    var randomItem =
      RandomUserArray[Math.floor(Math.random() * RandomUserArray.length)];
    let id = randomItem.id;

    console.log(id);

    const user = jsonUser.users.find((user) => user.id === id);

    newLog = { id: json.nextId++, user: user.id, date: new Date() };
    json.logs.push(newLog);

    await fs.writeFile(global.logsFileName, JSON.stringify(json));

    let newUrl = 'https://api.whatsapp.com/send?phone=55' + user.phone;

    const newJson = {
      users: [],
    };
    newLink = { url: newUrl };
    newLink = newJson.users.push(newLink);

    newLink = JSON.stringify(newJson);

    res.send(newLink);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/', async (_, res) => {
  try {
    let data = await fs.readFile(global.usersFileName, 'utf8');
    let json = JSON.parse(data);
    delete json.nextId;

    res.send(json);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.listen(3000, async () => {
  try {
    await fs.readFile(global.usersFileName, 'utf8');
    console.log('Api Started!');
  } catch (err) {
    const initialJson = {
      nextId: 1,
      users: [],
    };
    fs.writeFile(global.usersFileName, JSON.stringify(initialJson)).catch(
      (err) => {
        logger.error(err);
      }
    );
  }
});
