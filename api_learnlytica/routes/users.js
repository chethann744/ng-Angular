var express = require('express');
var router = express.Router();

let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */
 router.get('/', function (req, res, next) {
 dbConnection.query('select * from user_profile', (error, results, fields) => {
    if (error) throw error;
    res.send(results)
  });
});
// router.post('/profile', (req, res, next) => {
//   let {
//     username,
//     email,
//     password,
//     first_name,
//     last_name,
//     job_title,
//     salary,
//     create_datetime

//   } = req.body

//   let insertcomand = `INSERT INTO user_profile (username,email,password,first_name,last_name,job_title,salary,create_datetime)
//   VALUES('${username}', '${email}', '${password}', '${first_name}', '${last_name}','${job_title}', ${salary}, '${create_datetime}')`;
//   dbConnection.query(insertcomand, (err, result) => {
//     if (err) throw err;
//     res.send(result)
//   })
// });
// router.post('/', function (req, res, next) {
//   res.send('I am post call');
  // dbConnection.query('select * from user_profile', (error, results, fields) => {
  //   if (error) throw error;
  //   res.send(results)
  // });
  router.post('/contact', function (req, res, next) {

    console.log(req.body);
    
    res.send('I am post call');

});


module.exports = router;
