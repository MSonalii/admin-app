const express = require('express');
const path = require('path');
const user = require('./src/route/user.route');
const company = require('./src/route/company.route');
const app = express();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/user',user);
app.use('/company',company);

app.listen(5000, () => {
   console.log('server started on 5000- ');
});