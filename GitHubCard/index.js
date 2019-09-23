/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


{/* <div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div> */}

function CardCreator(user_object){

  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = user_object.avatar_url;
  //append to card
  card.appendChild(image);

  const card_info = document.createElement('div');
  card_info.classList.add('card-info');

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = user_object.name;

    const username = document.createElement('p');
    username.classList.add('username');
    username.textContent = user_object.login;

    const location = document.createElement('p');
    location.textContent= `Location: ${user_object.location}`;

    const github_url = document.createElement('a');
    github_url.href = user_object.html_url;
    github_url.textContent = user_object.html_url;

    const profile = document.createElement('p');
    profile.textContent = `Profile: ${github_url}`;

    const followers = document.createElement('p');
    followers.textContent = `Followers: ${user_object.followers}`;

    const following = document.createElement('p');
    following.textContent = `Following: ${user_object.following}`;

    const bio = document.createElement('p');
    bio.textContent = `Bio : ${user_object.bio}`;

    //appending all card-info
    card_info.appendChild(name);
    card_info.appendChild(username);
    card_info.appendChild(location);
    card_info.appendChild(github_url);
    card_info.appendChild(profile);
    card_info.appendChild(following);
    card_info.appendChild(followers);
    card_info.appendChild(bio);
    

    //append card-info to card
    card.appendChild(card_info);

    return card;
}

const cards_container = document.querySelector('.cards');

const followersArray = [
  'cleph01',
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

axios.get(`https://api.github.com/users/cleph01/followers`)
      .then((response) => {
          
              //Network request finished
              response.data.forEach( item => {

                followersArray.push(item.login);
                
              });
              
              // console.log(followersArray);
      })
      .catch((error) => {
        console.log("Follower request was unsuccessful");
        console.log(error);
      })
      .then(() => {
          followersArray.forEach( item => {

            axios.get(`https://api.github.com/users/${item}`)
              .then((response) => {
                  
                  //Network request finished
                  const card = CardCreator(response.data);
          
                  cards_container.appendChild(card);
                  
              })
              .catch((error) => {
                  console.log("Network request was unsuccessful");
                  console.log(error);
              })
          });
      })
      .catch((error) => {
        console.log("Chaining unsuccessful");
        console.log(error);
      });


      //cleaner





// axios.get(`https://api.github.com/users/cleph01/followers`)
//   .then((response) => {
      
//       //Network request finished
//       console.log(response);
      
//   })
//   .catch((error) => {
//       console.log("Network request was unsuccessful");
//       console.log(error);
//   });



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [
//     'tetondan',
//     'dustinmyers',
//     'justsml',
//     'luishrd',
//     'bigknell'
//   ];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
