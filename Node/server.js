var express = require('express');
var bodyParser = require('body-parser');

var svc= new express();
var port = process.env.port || 8084;
var router = express.Router();

svc.use(bodyParser.json());//support json encoded bodies
svc.use(bodyParser.urlencoded({extended:true}));//support encoded bodies

router.use(function(req,res,next) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','content-type,auth-ticket,userName,password');
  res.setHeader('Access-Control-Allow-credentials',true);
  next();  
})

router.get('/login',function (req,res) {
    var userName = req.headers['username'];
    var password = req.headers['password'];
    console.log('username:'+userName);
    console.log('password:'+password);
    if(userName == undefined || userName == null || userName === '' || 
        password == undefined || password == null || password ==='')
        return res.status(500).send('Validation failed');
    // console.log(JSON.stringify(req.headers));
    console.log(JSON.stringify('{Response:[{Status:Ok}]}'));
    //TODO:Validate
    var response = userName.toLowerCase() == "ramana" && password.toLowerCase() == "rama" ? 
                    {Status:"Ok",IsUserAdmin:true} :
                    {Status:"Ok",IsUserAdmin:false};
    console.log(JSON.stringify(response));
    return  res.json(response);
    // if(userName.toLowerCase() == "ramana" && password.toLowerCase() == "ram")
    //     return  res.json(response);
    // return  res.json(response);//'{Response:[{Status:Ok, IsUserAdmin:false}]}'
});

router.get('/user_info', function(req,res) {
   var userName = req.headers['username'];
   if(userName == undefined || userName == null || userName === '')
        return res.status(500).send('User Name cannot be empty.');
   var response = "{UserName: Ramana, Nationality: Indian, City: Bangalore, Mobile: 8861694269}";
   return res.json(response);
});

svc.use('/api/ris',router);
svc.listen(port);
console.log('server started at http://localhost:'+port+'/api/ris');
