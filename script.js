const API_KEY = "db75be3f6da59e6c54d0b9f568d19d16";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = "https://api.themoviedb.org/3/movie/157336/videos?api_key=db75be3f6da59e6c54d0b9f568d19d16";
const IMG_URL='https://image.tmdb.org/t/p/w500/';

// top rated movies:-
const API_URL_TR=`https://api.themoviedb.org/3/movie/top_rated?api_key=db75be3f6da59e6c54d0b9f568d19d16&language=en-US&page=1`;
const main_1=document.getElementById(`main_1`);

getMovies(API_URL_TR);
function getMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results);
        showMovies(data.results);
    })
}
function showMovies(data){
    main_1.innerHTML=``;

    data.forEach(Movie=>{
        const{original_title,poster_path,vote_average,vote_count}=Movie;
        const MovieEl=document.createElement(`div`);
        MovieEl.classList.add(`Movie`);
        MovieEl.innerHTML=`
        <a href="#"><img src="${IMG_URL+poster_path}" alt="" style="height:45vh" style="width:75vw" class="movie-box-img"></a>
            <h2 class="movie-title" style="color:orange">${original_title}</h2>
            <a href="#"class="watch-btn">
                <p>vote_count : <span style="color:orange">${vote_count}</span></p>
                <p>vote_average : <span style="color:orange">${vote_average}</span></p>
            </a> 
        `
    main_1.appendChild(MovieEl);
    })
}


//popular
const API_URL_PO=`https://api.themoviedb.org/3/movie/popular?api_key=db75be3f6da59e6c54d0b9f568d19d16&language=en-US&page=1`;
const main_2=document.getElementById(`main_2`);

getMovies2(API_URL_PO);
function getMovies2(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results);
        showMovies2(data.results);
    })
}
function showMovies2(data){
    main_2.innerHTML=``;

    data.forEach(Movie=>{
        const{original_title,poster_path,popularity}=Movie;
        const MovieEl_2=document.createElement(`div`);
        MovieEl_2.classList.add(`Movie`);
        MovieEl_2.innerHTML=`
        <a href="#"><img src="${IMG_URL+poster_path}" alt="" style="height:45vh" style="width:75vw" class="movie-box-img"></a>
            <h2 class="movie-title" style="color:orange">${original_title}</h2>
            <a href="#"class="watch-btn">
                <p>popularity : <span style="color:orange">${popularity}</span></p>
            </a> 
        `
    main_2.appendChild(MovieEl_2);
    })
}

//upcoming
const API_URL_UP=`https://api.themoviedb.org/3/movie/upcoming?api_key=db75be3f6da59e6c54d0b9f568d19d16&language=en-US&page=1`;
const main_3=document.getElementById(`main_3`);

getMovies3(API_URL_UP);
function getMovies3(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log("sasdfg",data);
        showMovies3(data.results);
    })
}
function showMovies3(data){
    main_3.innerHTML=``;

    data.forEach(Movie=>{
        const{original_title,poster_path,release_date}=Movie;
        const MovieEl_3=document.createElement(`div`);
        MovieEl_3.classList.add(`Movie`);
        MovieEl_3.innerHTML=`
        <a href="#"><img src="${IMG_URL+poster_path}" alt="" style="height:45vh" style="width:75vw" class="movie-box-img"></a>
            <h2 class="movie-title" style="color:orange">${original_title}</h2>
            <a href="#"class="watch-btn">
                <p>Release Date : <span style="color:orange">${release_date}</span></p>
            </a> 
        `
    main_3.appendChild(MovieEl_3);
    })
}


// searching->
var btn = document.getElementById('srch');
var ip = document.getElementById('search-input');

function getMovies4(url){
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.results);
        showMovies4(data.results);
    })
}

function showMovies4(data){
    main_4.innerHTML=``;

    data.forEach(Movie=>{
        const{original_title,poster_path}=Movie;
        const MovieEl_4=document.createElement(`div`);
        MovieEl_4.classList.add(`Movie`);
        MovieEl_4.innerHTML=`
        <a href="#"><img src="${IMG_URL+poster_path}" alt="" style="height:45vh" style="width:75vw" class="movie-box-img"></a>
            <h2 class="movie-title" style="color:orange">${original_title}</h2>
        `
    main_4.appendChild(MovieEl_3);
    })
}

btn.addEventListener('click',()=>{

    console.log("clicked")
    let query = ip.value;
    console.log(query)
    getMovies4(`https://api.themoviedb.org/3/search/movie?api_key=db75be3f6da59e6c54d0b9f568d19d16&query=${query}`);

});


// var btn = document.getElementById('srch');
// var ip = document.getElementById('search-input');
// btn.addEventListener('click',(e)=>
//     e.preventDefault();
//     const searchingTerm=ip.value;
//    if(searchMovies){
//     getMovies(`https://api.themoviedb.org/3/search/movie?api_key=db75be3f6da59e6c54d0b9f568d19d16&query=${query}`) ;
// });

