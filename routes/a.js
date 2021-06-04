    let array = ['www','hello.txt','hey.txt','hhaayy'];
    
    let folder = [];
    let file = [];
    array.forEach(function(val){
        if(val.indexOf()===-1) console.log(val);
        else console.log('file');
    });