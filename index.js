const express = require('express')
const PORT = process.env.PORT || 5000
const app = express();

app.post('/sms', (req, res) => {
  console.log('sms url works');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
