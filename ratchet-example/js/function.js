var name1;
var name2;
var name3 ='';
var phone1;
var phone2 ='';
var phone3 ='';


getname1();
console.log("outside" + name1);
 function GetDivElement() {
    return 'hello';
  }
 function getname1(){
     $.getJSON('https://spreadsheets.google.com/feeds/list/1ArLl6iQwXIBZ9J1DNnGSqLb8BqE0chjT5RdClpY1VvM/od6/public/basic?alt=json', function(data) {
    console.log("I am inside getJSON");
            name1=data.feed.entry[0].title.$t;
    console.log("function" + name1);
            phone1=data.feed.entry[0].content.$t.substring(7);
            });
     console.log("insdie getname" + name1);
     return name1;
 }
 function getphone1(){
     return phone1;
 }