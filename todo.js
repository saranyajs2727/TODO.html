//ni evalo padichure na check panre okay
//declare below...empty array ...
//okay now ha....yeah 4 th line le declre empty array enne achu....na ne pannikare
let listarr = [];//---> this array of element that show in list


function addTodo(){
    let lists=document.getElementById("list");
    let input=document.getElementById("search");
    if(input.value=="")
    {
        alert("please enter something in search box");
    }
    else{
        listarr.push(input.value); // here if input value is not empty then we add to listarr..ok
        let res = "" ;
        listarr.forEach((ele ,index)=>{
            res  = res + `<div class="paragraph-styling" > ${ele}  <button onclick="deleteTodo(${index})" class="delete"> X</button></div>` ;
        }); 
        //here res --> is the total element  present in list div....
        lists.innerHTML = res;
        input.value="";
    }
}
function deleteTodo(ele){  
    console.log(ele);
    let lists=document.getElementById("list");
    listarr= listarr.filter((element,ind)=> ele!=ind ) ;
    let res = "" ;
    listarr.forEach((ele ,index)=>{
        res  = res + `<div class="paragraph-styling" > ${ele}  <button onclick="deleteTodo(${index})" class="delete"> X</button></div>` ;
    }); 
    lists.innerHTML = res;
}