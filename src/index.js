// write your code here
window.addEventListener("load", () => {
    fetch('/ramens')
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        const ramenMenu = document.querySelector('#ramen-menu');
        data.forEach(function (ramen){
            const img = document.createElement('img');
            img.src = ramen.image;
            ramenMenu.appendChild(img);
        });
    });
});


document.querySelector('#ramen-menu').addEventListener('click', function (event){
    if (event.target.tagName === 'img') {
        fetch ('/ramens/:id')
            .then(function(response){
                return response.json;
            })
            .then(function(ramen){
                const ramenDetail = document.querySelector('#ramen-detail');
                ramenDetail.innerHTML = 
            `<img src="${ramen.image}">
          <h2>${ramen.name}</h2>
          <p>${ramen.description}</p>
          <p>Comment: ${ramen.comment}</p>
          <p>Rating: ${ramen.rating}</p>`;
      });
  }
});

document.querySelector('#new-ramen-form').addEventListener('submit',function (event){ 
    event.preventDefault();
    const name = document.querySelector('#name-input').value;
    const image = document.querySelector('#image-input').value;
    const description = document.querySelector('#description-input').value;
  
    const newRamen = {
      name,
      image,
      description,
    };

    const img= document.createElement('img');
    img.src = newRamen.image;
    document.querySelector('#ramen-menu').appendChild(img);
});
  