const fs=require("fs");
const path=require("path");
const filepath=path.join(__dirname,"../data/grades.json");

function savegrades(grades){
fs.writeFileSync(filepath,JSON.stringify(grades,null,2));
}
module.exports=savegrades;
