const cardsArray = 
	[{
		'name': 'shell',
		'img': 'img/blueshell.png',

	},
	{
		'name': 'star',
		'img': 'img/star.png',
	},
	{
		'name': 'bobomb',
		'img': 'img/bobomb.png',
	},
	{
		'name': 'mario',
		'img': 'img/mario.png',
	},
	{
		'name': 'luigi',
		'img': 'img/luigi.png',
	},
	{
		'name': 'peach',
		'img': 'img/peach.png',
	},
	{
		'name': '1up',
		'img': 'img/1up.png',
	},
	{
		'name': 'mushroom',
		'img': 'img/mushroom.png',
	},
	{
		'name': 'thwomp',
		'img': 'img/thwomp.png',
	},
	{
		'name': 'bulletbill',
		'img': 'img/bulletbill.png',
	},
	{
		'name': 'coin',
		'img': 'img/coin.png',
	},
	{
		'name': 'goomba',
		'img': 'img/goomba.png',
	},
];
// end data definition for the cards names
// Add root ID to the defined div of the index.html
	const game = document.getElementById('game');
// Create a section with a class of grid
	const grid = document.createElement('section');
	grid.setAttribute('class', 'grid');
	
	//Append the grid section to the game div
	game.appendChild(grid);

	// Duplicate the array to create a match for each img

	let gameGrid = cardsArray.concat(cardsArray);
	gameGrid.sort(() => 0.5 - Math.random());

//Loop through the list of cards,
	gameGrid.forEach(item => {
		const card = document.createElement('div');
	//Apply a crad class to div
		card.classList.add('card');
	//set the data-name attribute of the div
		card.dataset.name = item.name;
	//change the bkroung img
		card.style.backgroundImage = `url(${item.img})`;
	// Append the div to the grid section
	grid.appendChild(card);

	});


