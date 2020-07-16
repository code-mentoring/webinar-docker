const app = require('express')();

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(process.env.PORT || 9999);
