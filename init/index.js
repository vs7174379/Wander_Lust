const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/Listing.js");
const user=require("../models/user.js");
async function main(){
    await mongoose.connect('mongodb+srv://v7174379:CbDE3ZjKgkSX3mXR@cluster0.znnfp.mongodb.net/');
}
main().then(()=>{console.log("connection succesfuly")}).catch((err)=>{
    console.log(err);
})
const initDB=async ()=>{
    await Listing.deleteMany({})
    initData.data=initData.data.map((obj)=>({...obj,owner:"67a345c0a3a2745aa2525d58"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized")
};
initDB();
