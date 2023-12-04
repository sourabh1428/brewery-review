require('dotenv').config();

const{MongoClient,ServerApiVersion} = require('mongodb');


const url=process.env.MONGODB_URL || "mongodb://localhost:27017/";

const options={
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationsError:true,
    }
};

let client;


const connectToMongoDB=async()=>{
    if(!client){
        try{

            client=await MongoClient.connect(url,options);
            
            console.log("connneted to mongo 😉");


        }catch(error){
            console.log(error);
        }
    }
    return client;
}

const getConnectedClient=()=>client;


module.exports={connectToMongoDB,getConnectedClient};