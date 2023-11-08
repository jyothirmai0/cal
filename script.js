//eaccessing the input values or HTML elements
let inputVal=document.getElementById('inputVal')
let BtnEle=document.querySelectorAll('button')

//adding the functionality for buttons
let Text=''
BtnEle.forEach((buttons)=>{
    debugger;
    console.log(buttons)
    buttons.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target.innerHTML)
        if(e.target.innerText === "="){
            console.log(eval(Text))
            Text=eval(Text)
            console.log(Text)
            inputVal.value=Text;
        }
        else if(e.target.innerText ==="CLEAR"){
            Text=''
            inputVal.value=Text;
        }
        else{
            Text+=e.target.innerText
            inputVal.value=Text
        }
    })
})