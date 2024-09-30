const getUsersButton = document.getElementById('submit-data');

getUsersButton.addEventListener('click', function() {
    const query = document.getElementById('input-show').value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayShow(data);
        })
});

function displayShow(data) {
    const container = document.querySelector('.show-container');
    container.innerHTML = '';

    data.forEach(data => {
        const show = data.show;
        const element = document.createElement('div');
        element.classList.add('show-data');

        const image = show.image ? show.image.medium : '';

        element.innerHTML = `
            <img src="${image}">
            <div class="show-info">
                <h1>${show.name}</h1>
                ${show.summary}
            </div>
        `;

        container.appendChild(element);
    });
}