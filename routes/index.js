var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){

  fs.readdir('./uploads',function(err, filecreate){
    if(err) console.log(err);
    
    else res.render('index',{files: filecreate});
  })
});

router.get('/File-section',function(req,res){
  let file = `./uploads/${req.query.filename}.txt`;
  fs.writeFile(file,'',function(err){
    if(err) res.send('somthing went to wrong!');
    else res.redirect('/');
  });
});

router.get('/create/folder',function(req,res){
  let mekefld = `./uploads/${req.query.fname}`;
  fs.mkdir(mekefld,function(err,data){
    if(err) res.send({data});
    else res.redirect('/');
  });
});


router.get('/delete/:somthing',function(req,res){
  let dlt=`./uploads/${req.params.somthing}`;
  fs.unlink(dlt,function(err){
    if(err) res.send('somthing went wrong');
    else res.redirect('/');
  })
});



module.exports = router;
