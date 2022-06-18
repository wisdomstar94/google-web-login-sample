require('dotenv').config();

const index = (req, res, next) => {
  const renderData = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    scope: process.env.GOOGLE_SCOPE,
  };
  res.render('index/index', renderData);
  return;
};

module.exports = index;