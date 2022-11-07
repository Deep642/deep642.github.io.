const API_KEY = "db75be3f6da59e6c54d0b9f568d19d16";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = "https://api.themoviedb.org/3/movie/157336/videos?api_key=db75be3f6da59e6c54d0b9f568d19d16";
const IMAGE_KEY="https://api.themoviedb.org/3/configuration?api_key=db75be3f6da59e6c54d0b9f568d19d16";
const IMG_URL = 'https://image.tmdb.org/t/p/w500/57817ab4c3a36813870024b7lyknsTJk0w';
const main=document.getElementById(`main`);
getMovies(API_URL);
// getMovies(IMAGE_KEY);

function getMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML=``;

    data.forEach(Movie=>{
        const{name,type,published_at,key,id}=Movie;
        const MovieEl=document.createElement(`div`);
        MovieEl.classList.add(`Movie`);
        MovieEl.innerHTML=`
        <a href="${key}.html"><img src="/images/Interstellar-366875261-large.jpg" alt="" style="height:45vh" style="width:75vw" class="movie-box-img"></a>
            <h2 class="movie-title">${name}</h2>
            <span class="movie-type">Sci-Fi/Action</span>
            <a href="#"class="watch-btn">
                <i class="bx bx-right-arrow"></i>
                <span>${type}</span>
            </a> 
        `
    main.appendChild(MovieEl);
    })
}