const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URL;
mongoose.connect(connectionString).then(() => {console.log('connected to db', connectionString)}).catch(err => console.log(err));

