const readgrades=require("./readgrades");
const savegrades=require("./savegrades");

function addgrades(id,name,subject,grade){

const grades=readgrades();
grades.push({
id,
name,
subject,
grade
});
savegrades(grades);
console.log("Grade added successfully");
}
module.exports=addgrades;