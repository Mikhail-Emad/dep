const parms=new URLSearchParams( location.search);
//console.log(parms.get('prod-url'))


function getData() {
    var xhr = new XMLHttpRequest();
  
    // var prdID = Number(document.getElementById("pID").value);
    xhr.open("get", "https://fakestoreapi.com/products/category/"+parms.get('prod-url'), true);
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let products = xhr.responseText;
        //alert(products);
  
        let Data = JSON.parse(products);
        addproduct(Data)
      }
    };
  
    xhr.send();
  }

  ////////////////////////////////////////////////
  function addproduct(data) {
//console.log(data)
    var section = document.getElementById("section");
    var main = document.getElementById("main");
    for (var i = 0; i < data.length; i++) {
      var new_section = section.cloneNode(true);
      new_section.setAttribute("id", "x" + data[i].id);
      new_section.style.display = "inline-block";
      main.append(new_section);

      document.querySelectorAll(
        "#x" + data[i].id + ">#span-img>img"
      )[0].src = data[i].image;

      document.querySelectorAll(
        "#x" + data[i].id + ">#prod-data>h1"
      )[0].innerText = data[i].title;

      document.querySelectorAll(
        "#x" + data[i].id + ">#prod-data>h2"
      )[0].innerText = data[i].price+" $";

      document.querySelectorAll(
        "#x" + data[i].id + ">#prod-data>#btn"
      )[0].setAttribute('data-val',data[i].id)

      document.querySelectorAll(
        "#x" + data[i].id + ">#prod-data>#btn"
      )[0].addEventListener('click',(e)=>{
          e.preventDefault()
          document.getElementById("item").setAttribute("value",e.target.getAttribute("data-val"));
        document.getElementById("form").submit();
      })
    }
  }

  //////////////////////////////////
  document.addEventListener("mouseover",(e)=>{
    var id;
    if(e.target.tagName=='I')
   {
       id=e.target.parentElement.getAttribute('id')
       
       setcolor(e.target.parentElement)
    }
    
})
///////////////////////////////////////////////////////

function setcolor(element){
// var stars=document.getElementById(id)

 
element.addEventListener('click',(e)=>{ 
   var index;
   if(e.target.tagName=='I')
   {
       var stars=element.children
       index=e.target.getAttribute('data-index');
for(var i=0;i<=index;i++)
{
   if(stars[i].getAttribute('data-clicked')==0 )
   {
   stars[i].setAttribute('data-clicked','1')
   stars[i].style.color=' crimson'
}
else{
   for(var i=0;i<stars.length;i++)
{
   stars[i].setAttribute('data-clicked','0')
   stars[i].style.color='black'
}
}
   
}
   }
})
}
    // console.log(stars)
   // var index;
    //alert(e.target.tagName)
    
   
    