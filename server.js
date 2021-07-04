const express = require('express');
const app = express();

const mockUserData=[
{name:'Mark'},
{name:'Jill'}
]
app.get('/users',function(req,res){
    res.json({
        success: true,
        massage:'got one user',
        users: req.params.id
    })
})

app.listen(8000,function(){
    console.log("server is running")
    })