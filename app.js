const url = 'https://api.github.com/users/';
const user = "hasan132002";
const main = document.querySelector('.main')


const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');


const onClick = (e) => {
    e.preventDefault();
    fetchUser();
    
}

searchBtn.addEventListener('click', onClick);

const fetchUser = async () => {
    const username = input.value.trim(); // Extra spaces hata dein

    if (username === "") {
        main.innerHTML = `<h2>Please Enter Your Github Username</h2>`;
        return;
    }
    try{
        const response = await fetch(`${url}${username}`);
    const data = await response.json()
    console.log(response.status,"response");
    console.log(data);
    
    
    if(response.status === 404){
        main.innerHTML = `<h2>User not found</h2>`
    }else{
        main.innerHTML = "";
    main.innerHTML += `<div>
    <div class="github-user">
                <div class="user-img">
                    <img src="${data.avatar_url}" alt="user_image">
                </div>
                <div class="user-info">
                    <p class="fs-3">${data.name}</p>
                    <p class="text-primary">${data.login}</p>
                    <p class="text-secondary fs-6">${data.created_at} </p>
                </div>
            </div>
            <div class="user-stats">
                <div>
                    <p>Repos</p>
                    <p>${data.public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>${data.followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>${data.following}</p>
                </div>
            </div>
            <div class="user-detail">
                
                <div class="disc">
                    <p><i class="fa-solid fa-location-dot"></i></p>
                    <p>${data.location}</p>
                    
                
                </div>   
                <div class="disc">
                    <p><i class="fa-solid fa-link"></i></p>
                    <p class="html-url">${data.html_url}</p>
                    
                
                </div>   
                <div class="disc">
                    <p><i class="fa-brands fa-twitter"></i></p>
                    <p>${data.twitter_username}</p>
                    
                
                </div>   
                <div class="disc">
                    <p><i class="fa-solid fa-star"></i></p>
                    <a href="${data.repos_url}">Repositories</a>
                    
                
                </div>   
            </div>
    </div>`
    }
    }
    catch(error){
        main.innerHTML = `<h2>Error Fetching User</h2>`
        console.log(error);
    }
    

    
    }
    
    

fetchUser();