// WARNING: For GET requests, body is set to null by browsers.
var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.response);
  }
});

xhr.open("GET", "http://localhost:8080/ws/personnes");
xhr.setRequestHeader("Content-Type","application/json")
xhr.setRequestHeader("Accept","application/json")
xhr.send();