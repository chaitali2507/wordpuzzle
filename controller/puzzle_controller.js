var add_word= require('../model/puzzle_model');
exports.insert = async (req,res) =>{
    
 
    
     var characters = "abcdefghiklmnopqrstuvwxyz";  
    var lenString = 16-req.body.name.length;  
    var randomstring = '';  
	var merge='';
    for (var i=0; i<lenString; i++) {  
        var rnum = Math.floor(Math.random() * characters.length);  
        randomstring += characters.substring(rnum, rnum+1);  
    }    
    merge=req.body.name+randomstring;
	strarry=merge.split('');
	var i,j,k;
	for(i=0;i<strarry.length;i++){
		j=Math.floor(Math.random()*i)
		k=strarry[i]
		strarry[i]=strarry[j]
		strarry[j]=k
	}
	merge=strarry.join('');
  
    req.body.randomstring=randomstring;
    req.body.merge=merge;

     var data= await add_word.create(req.body);
     res.status(200).json({
        status:"data insert",
        data
     })
}
exports.get_data = async (req,res) =>{
    var data= await add_word.find(req.body);
    res.status(200).json({
       status:"data select",
       data
    })
}