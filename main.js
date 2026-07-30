const addgrades=require("./modules/addgrades");
const deletegrade=require("./modules/deletegrade");
const updategrade=require("./modules/updategrade");
const readgrades=require("./modules/readgrades");
console.log("\n Adding student");
addgrades(1,"Aliaa","math",95);
addgrades(2,"Ali","science",80);
addgrades(3,"Sara","English",70);
addgrades(4,"Ahmed","Arabic",85);

console.log("\n All grades");
console.log(readgrades());
console.log("\n Update grades");
updategrade(2,90);
console.log(readgrades());
console.log("\n Delete student");
deletegrade(3);
console.log(readgrades());





