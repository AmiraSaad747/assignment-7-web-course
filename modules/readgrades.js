const fs=require("fs");
const path=require("path");
const filepath=path.join(__dirname,"../data/grades.json");

function readgrades(){

if(!fs.existsSync(filepath)){
return [];
}
const data=fs.readFileSync(filepath,"utf-8");
return JSON.parse(data);
}
module.exports=readgrades;