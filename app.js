const openSourceBookLibraries = [
	{
		name: 'Project Gutenberg',
		url: 'https://www.gutenberg.org/ebooks/search/?query='
	},
	{
		name: 'Internet Archive',
		url: 'https://archive.org/search.php?query='
	},
	{
		name: 'Open Library',
		url: 'https://openlibrary.org/search?q='
	}
];

const searchForm = document.querySelector('form');
const searchIframeContainer = document.getElementById('search-iframe-container');

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const searchQuery = event.target.querySelector('input[type="text"]').value;

	searchIframeContainer.innerHTML = '';

	openSourceBookLibraries.forEach((library) => {
		const iframe = document.createElement('iframe');
		iframe.src = library.url + searchQuery;
		iframe.title = library.name;
		iframe.width = '100%';
		iframe.height = '500px';
		iframe.style.marginBottom = '20px';
		searchIframeContainer.appendChild(iframe);
	});
});
