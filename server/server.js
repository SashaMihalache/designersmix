const app = require('express')();

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

app.use('/', (req, res) => {
  res.send('Hello');
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
})