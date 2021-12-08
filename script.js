const array1=["alma","körte","banán"];
const array2=["barack","szilva","szölő"];

function addValueToEndOfArray(arr,val) {
    arr.push(val);
    return arr;
}
//console.log(addValueToEndOfArray(array2,"Dió"));
//console.log(array2);

function addValueToEndOfNewArray(arr,val) {
    //const newArray = [...arr];
    //newArray.push(val);
    //const newArray={...arr};//wtf
    //return newArray;
    return [...arr,val];
}
//console.log(addValueToEndOfNewArray(array2,"Dió"));
//console.log(array2);

function addNewArray(arr1,arr2) {
    /*for (const item of arr2) {
        arr1.push(item);
    }
    return arr1;*/
    //return [...arr1,...arr2];
    return arr1.concat(arr2);
}
console.log(addNewArray(array1,array2));
console.log(array1);

const array3=[
    {
        name:"Garfield",
        type:"cat"
    },
    {
        name:"Garfield2",
        type:"dog"
    }
];
function filterTheCat(creatures) {
    /*const result=[];
    for (const creature of creatures) {
        if (creature.type==="cat") {
            creature.note="This is an amazing cat";
            result.push(creature);
        }
    }
    return result;*/
    const result=creatures.filter(creature => {
        if(creature.type==="cat")
        {
            //const newCreature=JSON.parse(JSON.stringify(creature));
            //newCreature["note"]="This is an amazing cat";
            //console.log(newCreature);
            return creature;
        }
    });
    //console.log(result);
    result[0].note="This is my amazing cat";
    return result;
}
console.log(filterTheCat(array3));
console.log(array3);
/*
let a=1;
let b=a;

a=2;
b=3;

//console.log("a: ",a," b: ",b);

let c={
    key:1,
    key2:{
        subkey:2
    }
};
let e={key:1};
let g=c.key2;//nocopy
let d=c;//nocopy
//c.key=2;
//d.key=3;

//console.log("c: ",c," d: ",d);
//console.log({}==={});
console.log(e===c);
console.log("alma"==="alma");


//let f={...c};//üres objectum c-nek a tartalmával, de nem az objectummal, shallow copy
//let f=Object.assign({},c);//shallow copy
let convertCobjectToString=JSON.stringify(c);
let f=JSON.parse(convertCobjectToString);
c.key=2;
c.key2.subkey=5;
f.key=3;
f.key2.subkey=6;
g.subkey=8;
console.log("c: ",c," f: ",f," g: ",g);*/