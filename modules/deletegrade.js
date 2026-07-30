const readgrades=require("./readgrades");
const savegrades=require("./savegrades");

function deletegrade(id){

    let grades=readgrades();
    const newGrades=grades.filter(student=>student.id!==id);

    if(grades.length===newGrades.length){
        console.log("Student not found");
        return;
    }
    savegrades(newGrades);
    console.log("Grade delete successfully");
}
module.exports=deletegrade;