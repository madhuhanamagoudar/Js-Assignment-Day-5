console.log("Hello");

async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json()
    console.log(data);
}
let obj = {
    userId:6,
    title:"JS Assignment",
    body:'This is Day 5 assignment',
}
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))

fetchData();
