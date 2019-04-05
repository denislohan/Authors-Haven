let express = require('express');
let app= express();
let User = require('./models/user'),
    Grade = require('./models/grades')
const port=3000;
 let user = new User();
 let grade = new Grade();
user.create('papa','papa3');
grade.create('1','67');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



