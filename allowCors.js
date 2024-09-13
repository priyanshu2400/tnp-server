const cors = require('cors');

const allowCors = cors({
  origin: '*', // Adjust the origin as per your requirement
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
});

module.exports = allowCors;