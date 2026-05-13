const student={
  fullName: "Rahul Kumar",
  age:23,
  isPass:true
}
console.log(student.fullName)
console.log(student.age)
console.log(student.isPass)

console.log(window)
console.dir(window.document)//or just document
console.dir(document.body.childNodes[1])

let heading=document.getElementById('heading1')
console.log(heading)
console.dir(heading)

let headings=document.getElementsByClassName('heading')
console.log(headings)

let firstElement=document.querySelector('p');
console.log(firstElement)

let allElements=document.querySelectorAll('p'
)
console.log(allElements)