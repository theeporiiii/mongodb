const mongoose = require('mongoose');
let mongodb_url ='mongodb+srv://Athul:Athu#869@cluster0.ynske8l.mongodb.net/firstdb?retryWrites=true&w=majority&appName=Cluster0'


let compass_url ='mongodb://localhost:27017/sampledb'

mongoose.connect(compass_url).then(()=>{
    console.log(("db connected"))
})
.catch((err)=>{
    console.log(err);

});