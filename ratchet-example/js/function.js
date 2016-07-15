$.getJSON('https://spreadsheets.google.com/feeds/list/1ArLl6iQwXIBZ9J1DNnGSqLb8BqE0chjT5RdClpY1VvM/od6/public/basic?alt=json', function(data) {
            var x = document.getElementById("myTable").rows[0].cells;
            x[0].innerHTML = data.feed.entry[0].title.$t;

            var x = document.getElementById("myTable").rows[0].cells;
            var a = (x[1].innerHTML).replace("Loading...", 	data.feed.entry[0].content.$t.substring(7));
            a = a.replace("00000000",data.feed.entry[0].content.$t.substring(7));
            x[1].innerHTML  = a;

            var x = document.getElementById("myTable").rows[1].cells;
            x[0].innerHTML = data.feed.entry[1].title.$t;

            var x = document.getElementById("myTable").rows[1].cells;
            var a = (x[1].innerHTML).replace("Loading...", 	data.feed.entry[1].content.$t.substring(7));
            a = a.replace("00000000",data.feed.entry[1].content.$t.substring(7));
            x[1].innerHTML  = a;

            var x = document.getElementById("myTable").rows[2].cells;
            x[0].innerHTML = data.feed.entry[2].title.$t;

            var x = document.getElementById("myTable").rows[2].cells;
            var a = (x[1].innerHTML).replace("Loading...", 	data.feed.entry[2].content.$t.substring(7));
            a = a.replace("00000000",data.feed.entry[2].content.$t.substring(7));
            x[1].innerHTML  = a;
            });

 $.getJSON('https://spreadsheets.google.com/feeds/list/1ArLl6iQwXIBZ9J1DNnGSqLb8BqE0chjT5RdClpY1VvM/od6/public/basic?alt=json', function(data) {
            console.log(data.feed.entry[4].content.$t);
            document.getElementById('event1').src=data.feed.entry[4].title.$t;
            document.getElementById('event2').src=data.feed.entry[5].title.$t;
            document.getElementById('event3').src=data.feed.entry[6].title.$t;
            document.getElementById('link1').href=data.feed.entry[4].content.$t.substring(7);
            document.getElementById('link2').href=data.feed.entry[5].content.$t.substring(7);
            document.getElementById('link3').href=data.feed.entry[6].content.$t.substring(7);
            });
    