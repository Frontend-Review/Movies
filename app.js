// selecting elements from the dom

const API_KEY = '05f40720ee8ba5f79fd12a5e91474b59';
endpoint = 'https://api.themoviedb.org/3/search/movie?api_key=05f40720ee8ba5f79fd12a5e91474b59';

const buttonElement = document.querySelector("#search");
const inputElement = document.querySelector("#inputValue");


buttonElement.onClick = function (event) {
    event.preventDefault();
    const value = inputElement.value;
    console.log('Value: ',value);

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log('Data:', data);

    })
.catch((error) =>{
    console.log('Error: ', error);

    
})
console.log('Value:', value);
}





