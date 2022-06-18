require('dotenv').config();
const axios = require('axios');

const callback = async(req, res, next) => {
  const {
    state,
    code,
    scope,
  } = req.query;

  const result = await axios.post('https://oauth2.googleapis.com/token', {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    code: code,
    grant_type: 'authorization_code', 
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
  });

  // console.log('result', result);
  const data = result.data;
  console.log('data', data);

  res.json({
    result: 'success',
    message: 'your terminal console.log data check!',
  });
  return;
};

module.exports = callback;