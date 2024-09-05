const model=document.getElementsByClassName('.Services');
const openmodel=document.getElementsByClassName('.openmodel');
const closemodel=document.getElementsByClassName('.closemodel');

console.log(model,openmodel,closemodel);

openmodel.addEventListener('click',()=>{
    model.showModel();
})
closemodel.addEventListener('click',()=>{
    model.close();
})
