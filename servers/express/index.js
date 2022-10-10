const express = require('express')
const app = express();
const PORT = process.env.PORT || 8001;
app.get('/', (req, res) => {
  res.send('Hello from express server');
})
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
})