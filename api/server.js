const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1> Welcome to our server </h1>');
  }
);

app.post('/message', async (req, res) => {
    res.send('<h1> Hello World </h1>');
  }
);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  }
);
