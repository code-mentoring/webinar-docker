const app = require('express')();

app.get('/', (req, res) => {
  res.send('ok');
});

const PORT = process.env.PORT || 9999;
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);
