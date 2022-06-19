// comparing two JSON have the same properties without order
var obj1 = { name: "Person 1", age:5 };
var obj2 = {age:5, name: "Person 1" };

let objkeys1=Object.keys(obj1);
let objkeys2=Object.keys(obj2);

let k=0;
if(objkeys1.length===objkeys2.length){
    
for(let i=0;i<objkeys1.length;i++){
    for(let j=0;j<objkeys2.length;j++){
if(objkeys1[i]===objkeys2[j]){
k++;
}
    }

}
console.log(k===objkeys1.length);
}
else{
    console.log(false);

}
