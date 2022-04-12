fetch('http://localhost:3000/webpagecontent/1')
  .then(response => response.json())
  .then(Data =>  {
            document.querySelector('#paragraph').innerHTML = Data.Discribtion;
            document.querySelector('#WelcomeHeading').innerHTML = Data.Title;
            document.querySelector('#seaimage').src = Data.seapath;
            document.querySelector('#menpic').src = Data.menpath;
  })
  .catch(error => {
                console.log("GET Error Status: " + JSON.stringify(error));
            });