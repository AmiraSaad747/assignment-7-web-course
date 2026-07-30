const readgrades=require("./readgrades");
const savegrades=require("./savegrades");

function updategrade(id,newGrade){

const grades=readgrades();
const student=grades.find(item=>item.id===id);
if(!student){
    console.log("student not found");
    return;
}
student.grade=newGrade;
savegrades(grades);
console.log("Grades update successfully");
}
module.exports=updategrade;