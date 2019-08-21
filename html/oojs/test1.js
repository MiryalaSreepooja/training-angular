function greet(name) {
    console.log('this is ' +name);
}
greet('pooja');
greet(8+' hello');
let emp=[{id:100,name:'pooja',city:'hyd',salary:55000},
{id:101,name:'kavya',city:'hyd',salary:55000},
{id:102,name:'mounika',city:'hyd',salary:5000},
{id:103,name:'akhil',city:'hyd',salary:5500}];
for(let i=0;i<emp.length;i++) 
{
    console.log(emp[i].name);
}