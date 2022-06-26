const requestURL = "https://roj21008.github.io/WDD-330/js/links.json"
const ol = document.getElementById("weeklist")
let dataRequest;
fetch(requestURL)
    .then(request => request.json())
    .then( ( data ) => {
    console.log(data);
    const link = data.links;
    dataRequest = link;
    link.forEach(displayList);
});  