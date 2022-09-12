const mongoose = require('mongoose');
const { config } = require('dotenv');
config();
const connection = process.env.DB_URI;
mongoose
  .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected Successfully'))
  .catch((err) => console.log(err));
