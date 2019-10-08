import fs from "fs";

export default (req,res)=>{
    res.send(fs.readdirSync("uploads/images/"))
}