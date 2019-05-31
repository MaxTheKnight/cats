function getUwu() {
    fetch('https://aws.random.cat/meow').then(function(response) {
        return response.json();
    })
    .then(function(catData) {
        console.log(catData.file);
        let catImg = document.createElement("img");
        catImg.src = catData.file;
        let catJar = document.getElementById("catJar");
        catJar.prepend(catImg);

    });
}

document.getElementById("button").onclick = getUwu