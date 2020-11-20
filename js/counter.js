function updateCounter(){
   fetch("https://c48ydj3yvk.execute-api.us-east-1.amazonaws.com/Development/visitorcount")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.body.visitorCount;
      })
      .catch(function(error) {
        console.log(error);
      });  
    }