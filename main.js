/*
Hello this is Campbell Edward, This is My Sample Code,
 started project (05/09/2019)(2:27AM)
*/

let MYKEY = "CqpuAeqm0rCIviFEoVHv3E3xEMzPcQVW";
let storeddata = document.getElementById("lastsearch").innerHTML = localStorage.lastsearch;
document.getElementById(`lastsearch`).innerText = storeddata;
for (i = 0; i < 4; i++) {
    ////Hi Kelvin, We dont have any images yet so let this hide images 
          document.getElementById(`gifman${i}`).style.visibility = 'hidden';
          document.getElementById(`block${i}`).style.visibility = 'hidden';
  }

document.addEventListener("DOMContentLoaded", init);
function init() {

  document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); //to stop the page reload
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${MYKEY}&limit=5&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(content => {
        for (i = 0; i < 4; i++) {
            ////Hi Kelvin, This should clear out old images 
            document.getElementById(`gifman${i}`).src = '';

            //once button is pressed show blocks 
            document.getElementById(`block${i}`).style.visibility = 'visible';
           }
        let img = document.createElement("img");
        img.src = content.data[0].images.downsized.url;
        document.querySelector("#search").value = "";

        //THIS SHOULD STORE USER LAST SEARCHED GIF LOCALLY ON THE COMPUTER
        localStorage.setItem("lastsearch", str);

        /////update last search at real time.
        let storeddata = document.getElementById("lastsearch").innerHTML = localStorage.lastsearch;
        document.getElementById(`lastsearch`).innerText = storeddata;
        
         for (i = 0; i < 4; i++) {
             ////Hi Kelvin, This should put in new images
          document.getElementById(`gifman${i}`).src = content.data[i].images.downsized.url;
          document.getElementById(`a${i}`).href = `https://twitter.com/intent/tweet?text=${content.data[i].url}`;
         }
         for (i = 0; i < 4; i++) {
             ////Hi Kelvin, This should make images visible
          document.getElementById(`gifman${i}`).style.visibility = 'visible';
          
         }
      
        console.log('Done');

      })
      .catch(err => {
        console.error(err);
        alert('Ops Something Went Wrong')
      });
  });
}