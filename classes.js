class User
{
  name;
  email;
  constructor(name,email)
  {
    this.name=name;
    this.email=email;
  }
  viewData()
  {
    console.log('Name : ',this.name,"\nEmail : ",this.email)
  }
}
class admin extends User
{
  editData(name)
  {
    this.name=name;
    console.log(name)
  }
}
let obj1=new admin("Pratham","johnthapa13@gmail.com");
obj1.editData("John")