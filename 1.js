class Name{
    constructor(fname,lname,gender)
    {
        this.fname=fname;
        this.lname=lname;
        this.gender=gender;
    }
   static start()
    {
        this.gender='female';
        console.log(Name.fname+" "+this.gender);
    }
}
let a=new Name('bhanuri','chandu','male');
Name.start();
var b=(bu)=>{
    var c=bu;
    var d=c.fname+" "+c.lname;
   
    return d;
}
console.log(b(a));