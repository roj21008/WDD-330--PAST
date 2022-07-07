const Url = "https://roj21008.github.io/WDD-330/team%20assignments/week11/json-server/database.json"


fetch(Url)
    .then(request => request.json())
    .then( data  => console.log(data));  

