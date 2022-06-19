// Day04 3.Use the same rest countries and print all countries name, region, sub region and population

const req= new XMLHttpRequest();

req.open('GET','https://restcountries.com/v3.1/all');

req.send();

req.onload=function(){
    var country=JSON.parse(this.responseText);
    console.log(country);
    for(let coun of country){
        console.log(coun.region,coun.name,coun.subregion,coun.population);
    }
}

// Day04 use rest countries api and display all the country flags in console
const req= new XMLHttpRequest();

req.open('GET','https://restcountries.com/v3.1/all');

req.send();

req.onload=function(){
    var country=JSON.parse(this.responseText);
    console.log(country);
    for(let coun of country){
        console.log(coun.region,coun.name,coun.subregion,coun.population);
    }
}