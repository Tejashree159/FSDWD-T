
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();

request.onload=function(){
    var result=JSON.parse(request.response);
     result.filter((countries) => {
           return countries.region ==="Asia";
     })
     console.log(result);
}

request1.onload=function(){
    var result1=JSON.parse(request1.response);
    const pop = result1.filter((element)=>{
        return element.population<200000;
    })
console.log(pop);}


requestt.onload=function(){
    var resultt=JSON.parse(requestt.response);
   resultt.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
}


reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}


req.onload=function(){
    var res=JSON.parse(req.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }

    
 

 