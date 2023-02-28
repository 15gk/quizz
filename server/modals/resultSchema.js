import mongoose from "mongoose"
const {Schema}=mongoose;

const resultModel =new Schema ({
    username : { type :string },
    result : { type : Array ,default :[]},
    attempt : {type :Number ,default :0},
    points :{type :Number,default :0},
    achived :{type :String ,default :''},
    createdAt : {type :Date,default :Date.now}
});

export default mongoose.model('result',resultModel)