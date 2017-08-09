fetch("https://api.github.com/users/jaredp75")
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data.results[0].title);


//        let headerText = `
//          <h1>${data.name}</h1>
//        `
//        let header = document.getElementById("header");
//        header.innerHTML += headerText;

        let basicsText = `
          <ul>
            <li><strong>Name:</strong>${data.name}</li>
            <li><strong>GitHub URL:</strong>${data.html_url}</li>
  	        <li><strong>Email:</strong><a href="mailto:${data.email}"> ${data.email}</a></li>
  	        <li><strong>Company:</strong>${data.company}</li>
  	        <li><strong>Website:</strong>${data.blog}</li>
  	      </ul>
  	     `
  	     let basics = document.getElementById("basics");
  	     basics.innerHTML += basicsText;


  	     let storyImage = `
  	      <img src="${data.avatar_url}" alt="User Profile Picture">
  	       <p>Lorem ipsum dolor sit amet, appareat definitiones in his, altera eligendi invidunt id usu. Quo cu mutat ignota liberavisse, nec ex possit possim, ius nihil omn. Lorem ipsum dolor sit amet, appareat definitiones in his, altera eligendi invidunt id usu. Quo cu mutat ignota liberavisse, nec ex possit possim, ius nihil omn. Lorem ipsum dolor sit amet, appareat definitiones in his, altera eligendi invidunt id usu. Quo cu mutat ignota liberavisse, nec ex possit possim, ius nihil omn. Lorem ipsum dolor sit amet, appareat definitiones in his, altera eligendi invidunt id usu. Quo cu mutat ignota liberavisse, nec ex possit possim, ius nihil omn.</p>
  	     `
  	        let story = document.getElementById("story");
  	        story.innerHTML += storyImage;
  	      })
  	    }
  	  )
