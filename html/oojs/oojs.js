class Person{
    constructor(id,name,city,salary){
        this.id=id;
        this.name=name;
        this.city=city;
        this.salary=salary;
    }
    details(){
        return this.id+" "+this.name+" "+this.city+" ";
    }
}
let p1=new Person(100,'shantanu','hyderabad');
console.log(p1.details());
class emp extends Person{
    constructor(id,name,city,salary)
    {
        super(id,name,city);
        this.salary=salary;
    }
    details(){
        return super.details()+" "+this.salary;
    }
}
let e1=new emp(110,'john','Bangalore',84000);
console.log("Emp details: "+e1.details());