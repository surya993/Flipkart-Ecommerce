import mongoose from 'mongoose';



const Connection= async(username,password)=>{
    const URL = `mongodb://${username}:${password}@ecommerceweb-shard-00-00.5vc1q.mongodb.net:27017,ecommerceweb-shard-00-01.5vc1q.mongodb.net:27017,ecommerceweb-shard-00-02.5vc1q.mongodb.net:27017/DATABASES?ssl=true&replicaSet=atlas-qw9hdl-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true});
    console.log('Database connected Successfully');
    }catch(error){
        console.log('Error: ', error.message);
    }
}

export default Connection;