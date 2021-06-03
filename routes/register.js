var express = require('express');
var router = express.Router();
var db = require('../model/db')

/* GET users listing. */
router.get('/', function (req, res, next) {

  let inform = req.query;
  //let inform2=req.body.params //如果是post请求，需要用这个方法
  let username = inform.newusername;
  let password = inform.newpassword;
  let newuserSQL = "insert into users(user_id,user_name,user_password )VALUES (" + '"' + "1001" + '"' + "," + '"' + username + '"' + "," + '"' + password + '"' + ")";
  // console.log(newSQL);
  let conn = db.connection();
  db.insert(conn, newuserSQL, "", function (resx) {
    //console.log(resx)
    if(resx.affectedRows>0){
      res.send({
        state:"success",
        message:"注册成功"
      });
    }
  });
  db.close(conn)


  // res.send('注册界面');
});

module.exports = router;