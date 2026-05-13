let btn1=document.querySelector('#btn1');
// btn1.onclick=()=>
// {
//   console.log('bt1 or last button was clicked')
// }
let div=document.querySelector('div')
div.onmouseover=()=>
{
  console.log('you just hovered over the box')
}
div.onclick=()=>
{
  console.log('you clicked the box')
}
btn1.addEventListener('click',(evt)=>
{
  console.log(evt)
  console.log(evt.type)
  console.log('Last button was clicked')
})
btn1.addEventListener('mouseenter',()=>
{
  console.log('Cursor entered')
})
btn1.addEventListener('mouseleave',()=>
{
  console.log('Cursor exited')
})