// search style
function search_style() {
  document.getElementById("search").style.width = "500px";
  document.getElementById("search").style.border = "4px solid chartreuse";
}
function saerch_blur() {
  document.getElementById("search").style.width = "300px";
  document.getElementById("search").style.height = "25px";
  document.getElementById("search").style.border = "2px solid black";
}
/////////////////////////////////////////////////////////////////////////////////
// navbar
function nav_scorell() {
  document.getElementById("nav_bar").style.position = "fixed";
  // document.getElementById("nav_bar").style.backgroundColor="red"
}

/////////////////////////////
//main

var categories = ["electronics", "jewelry", "men-clothing", "women-clothing"];
///////////////////////////////////////////////////////////////
// get categories

///////////////////////////////////////////////////
//document.addEventListener("load", getProducts)
function getData(url, query) {
  var xhr = new XMLHttpRequest(); //

  // var prdID = Number(document.getElementById("pID").value);
  xhr.open("get", url, true);//open channel betwen me and browser  

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let products = xhr.responseText;
      let Data = JSON.parse(products);
      switch (query) {
        case "category":
          addCategory(Data);
          break;
        case "products":
          //addnode(Data)
          break;
        case "item":
          break;
        default:
          break;
      }
    }
  };

  xhr.send();
}
// /* category
// image
// price
// description */
//////////////////////////////////////////////
function addCategory(data) {
  console.log(data);
  var main_div = document.getElementById("main_div");
  var main = document.getElementById("main");
  for (var i = 0; i < data.length; i++) {
    var new_div = main_div.cloneNode(true);
    new_div.setAttribute("id", categories[i]);
    console.log(categories[i]);
    new_div.style.display = "inline-block";
    main.append(new_div);
    document.querySelectorAll(
      "#" + categories[i] + ">#section>#card>a>img"
    )[0].src = "images/" + categories[i] + ".png";
    document.querySelectorAll(
      "#" + categories[i] + ">#section>#card>#container>#price"
    )[0].innerText = data[i];
    document.querySelectorAll("#"+categories[i]+">#section>#card>a>img")[0].setAttribute( "alt",data[i])
    document
      .querySelectorAll("#" + categories[i] + ">#section>#card>a")[0]
      .addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("prod-url").setAttribute("value",encodeURIComponent(e.target.alt) );
        document.getElementById("form").submit();
      });
    //main_div.style.display = "none";
    //main.append(new_div)
    // main.append(new_div)
  }
}
///////////////////////////////////////////////////
/* function addnode(data) {
  var img;
  var title;

  var main_div = document.getElementById("main_div");
  var main = document.getElementById("main");
  for (var i = 0; i < data.length; i++) {
    var new_div = main_div.cloneNode(true);
    new_div.setAttribute("id", "x" + data[i].id);
    new_div.style.display = "inline-block";
    main.append(new_div);
    document.querySelectorAll(
      "#x" + data[i].id + ">#section>#card>a>img"
    )[0].src = data[i].image;
    document.querySelectorAll(
      "#x" + data[i].id + ">#section>#card>#container>#price"
    )[0].innerText = data[i].price;

    main_div.style.display = "none";
    //main.append(new_div)
    // main.append(new_div)
  }
} */

