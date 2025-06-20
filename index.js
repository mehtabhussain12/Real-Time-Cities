Cities = ["karachi", "Lahore", "Islamabad"]
var list = document.getElementById("list")
function showlist(){
    list.innerHTML=""
     for (let i = 0; i < Cities.length; i++) {
       list.innerHTML+= `<li>${Cities[i]}</li>`
    }
}
function Addmore() {
   var  input = prompt("Enter somthing")
    Cities.push(input)
    list.innerHTML=""
    showlist()
   
}