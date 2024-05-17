// 1
import { nanoid } from 'nanoid'  //                npm run build
let tema =document.querySelector('.q')//           npm run build
let body =document.querySelector('.qw')//          npm run build
let btn =document.querySelector('.qwe')
let a = document.querySelector('.a')

let post = []


btn.addEventListener('click', post1)


function post1(){  
let check1 = tema.value.replace(/^\s+/, "")
let check2 = body.value.replace(/^\s+/, "")
console.log(check1.length)

if(check1 == "" || check2 == "" ){
    alert("заполните данные")
}
else{
    let obj = {
        tem:'',
        dat: '',
        bod:'',
        nan:'',
        but:''
    }
    let Data = new Date()
    let mont = Data.getMonth()
    let day = Data.getDate()
    let Year = Data.getFullYear()
    let Hour = Data.getHours()
    let Minu = Data.getMinutes()
    let Seco = Data.getSeconds()
    mont = mont + 1
    mont = String(mont)
    day = String(day)
    Year = String(Year)
    Hour = String(Hour)
    Minu = String(Minu)
    Seco = String(Seco)

    obj.tem = tema.value
    obj.bod = body.value
    
    if(Seco.length < 2){
        obj.dat = Year +"/"+ mont +"/"+ day +" "+ Hour +":"+ Minu +":"+ "0" + Seco        
    } 
    else if(Minu.length < 2){
        obj.dat = Year +"/"+ mont +"/"+ day +" "+ Hour +":"+ "0" + Minu +":"+ Seco        
    } 
    else if(Hour.lenght < 2){
        obj.dat = Year +"/"+ mont +"/"+ day +" "+ "0" + Hour +":"+ Minu +":"+ Seco                
    }
    else if (Seco.length < 2 && Minu.length < 2 ){
        obj.dat = Year +"/"+ mont +"/"+ day +" "+ Hour +":"+ "0" + Minu +":"+ "0" + Seco
    }
    else if (Hour.length < 2 && Minu.length < 2 ){
        obj.dat = Year +"/"+ mont +"/"+ day +" "+ "0" + Hour +":"+ "0" + Minu +":"+ Seco
    }
    else if (Hour.length < 2 && Seco.length < 2 ){
        obj.dat = Year +"/"+ mont +"/"+ day +" "+ "0" + Hour +":"+Minu +":"+ "0" +  Seco
    }
    else{
        obj.dat = Year +"/"+ mont +"/"+ day +" "+ Hour +":"+ Minu +":"+ Seco        
    }
    obj.nan = nanoid()
    post.push(obj)
    console.log(post)
    pereb()    
}
}

function pereb(){
    for(let posts of post){
        let div = document.createElement('div')
        div.className = 'divv'
        a.appendChild(div)
   let tem = document.createElement('H3')
   let dat = document.createElement('p')
   let bod = document.createElement('p')
   let nan = document.createElement('p')
   let but = document.createElement('button')
    tem.textContent = posts.tem
    bod.textContent = posts.bod
    dat.textContent = posts.dat
    nan.textContent = posts.nan
    nan.className = 'HIDDEN'
    but.textContent = "DELETE"
    but.className = 'delete'
    but.id = nan.textContent
    div.appendChild(tem)
    div.appendChild(dat)
    div.appendChild(bod)
    div.appendChild(nan)
    div.appendChild(but)        //npm run buildnpm run buildnpm run build     npm run build
    post = []
let btnr = document.querySelectorAll('.delete')    
for(let elem of btnr){
elem.addEventListener('click',del)
    
}


}
}


function del() {
    this.parentElement.remove()
}

