var express = require('express');
var fs = require('fs');
var router = express.Router();
var execSync = require('child_process').execSync,
    child;


router.post('/run', function(req, res) {
  //console.log(req.body.script);
  fs.writeFileSync("/tmp/test.js", req.body.script, function(err) {
      if(err) {
          return console.log(err);
      }
  });
    try{
      child = execSync('node /tmp/test.js');  
  }
  catch(e){
  //console.log(e);
    res.send(e.stderr); 
  }
  //console.log(child);
  res.send(child);
});

module.exports = router;
