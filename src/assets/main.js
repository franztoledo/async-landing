const API = 'https://spotify117.p.rapidapi.com/spotify_playlist/?url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F0Na4X4uPjriSQlCwaej0Bl';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '295692da71msh271fde084f1f6c7p1d152bjsn35a0f8871ddf',
		'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
      const track = await fetchData(API);
      const arrayTrack= Object.values(track.track_details)
      console.log(arrayTrack);
      let view = `
      ${arrayTrack.map(song => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${song.thumb}" alt="${song.song_name}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${song.song_name}
            </h3>
          </div>
        </div>
      `).slice(0,10).join('')}
  
      `;
      content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
  })();