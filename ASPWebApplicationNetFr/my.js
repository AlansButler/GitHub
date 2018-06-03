var i = 0;

function updateImage() {
  document.getElementById("demo1").innerHTML = "ui Called";
  var image = document.getElementById("imgID2");
  if (i%2==0) {
    image.src = "DSCN4527.JPG";
    document.getElementById("demo1").innerHTML = "IsOdd";
  }
  else {
    image.src = "DSCN4528.JPG";
    document.getElementById("demo1").innerHTML = "IsEven";
  }
  image.refresh;
  i++;

  document.getElementById("demo2").innerHTML = i.toString();


  var t = setTimeout(updateImage, 5500);
}

function updateImage2() {
  
    document.getElementById("demo1").innerHTML = "ui2";
  
}

document.getElementById("demo2").innerHTML = "Gets called";

