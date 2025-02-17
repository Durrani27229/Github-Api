const url = 'https://api.github.com/users/';
const user = "hasan132002";

const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

const onClick = () => {
    console.log(input.value);
    
}

input.addEventListener('click', onClick);

// const fetchUser = async () => {
//     const response = await fetch(`${url}${user}`);
//     const data = await response.json()
//     console.log(data);
//     console.log(data.avatar_url);
    
    
    

    
// }
// fetchUser();