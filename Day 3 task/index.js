var obj1 = { name: personi, age: 5 };

var obj2 = { age: 5, name: "person1" };

function areObjectsEqual(obj1, obj2) {
var keys1 = Object.keys(obj1);
var keys2 = Object.keys(obj2);
if (keys1.length != keys2.length) {
return false;
}

for (var i=0; i < keys1.length; i++) {
     if (obj1 [keys1[i]] !== obj2 [keys1[i]]) { 
        return false;
    }
}
}
return true;
console.log(areObjectsEqual(obj1, obj2));

var xhr = new XMLHttpRequest(); // create object
xhr.open("GET", "https://restcountries.com/v3.1/all", true); 

xhr.onload=function () {

var countries=JSON.parse(xhr.responseText);
console.log(countries);
console.log(country.name.common+":"+country.flag);


for (var i=0; i < countries.length; i++) {

console.log(countries[1].name.common + ":" + countries[i].flag);
console.log("Populations: ", countries[i].population);
}
};

xhr.send(); 