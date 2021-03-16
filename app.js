


const form = document.querySelector('form');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const shows = await getTVShows(form.elements.query.value);
    document.querySelectorAll('img').forEach(node => node.remove());
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement('img');
            img.src = show.show.image.medium;
            document.body.append(img);
        }
    }
    form.elements.query.value = '';

});

async function getTVShows(searchTerm) {
    const config = {'params': {'q': searchTerm}}
    const data = await axios.get('http://api.tvmaze.com/search/shows', config);
    return data.data;
}