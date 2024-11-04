const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

async function fetchContent() {
    try{
        const response = await fetch(API_ENDPOINT);
        const jsonData = await response.json();
       console.log(jsonData);
       
    } catch(err){
        console.log(err);
    }
}

fetchContent()