console.log("Script loaded successfully.");


const parrent = document.getElementById('parent');
const child = document.getElementById('child');

child.addEventListener("click", (event) => {
    console.log(" event:", event.target)
    console.log(" event:", event.currentTarget)
})


