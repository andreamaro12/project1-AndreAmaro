const mockDatabase = [
    { _id: '123', name: 'Goalie Gloves', published: true, color: 'black' },
    { _id: '583', name: 'Soccer Cleats', published: true, color: 'black' },
    { _id: '954', name: 'Soccer Gear', published: false, color: 'black' },
    { _id: '384', name: 'Soccer Balls', published: false, color: 'black' },
    { _id: '183', name: 'Goalie Jersey', published: true, color: 'black' },
    { _id: '007', name: 'Soccer Shorts', published: false, color: 'black' },
    { _id: '304', name: 'Soccer Jerseys', published: true, color: 'black' },
    { _id: '729', name: 'Soccer Scarves', published: false, color: 'black' },
    { _id: '734', name: 'Soccer Referee Gear', published: true, color: 'black' },
];

function renderList (results) {
    const productDiv = document.querySelector('#products');

    productDiv.innerHTML = '';
    const products = results.map((result, index) => {
        return '<div>' + result.name + '</div>';
    });

    products.forEach((item) => {
        productDiv.innerHTML += item;
    });


}

renderList(mockDatabase);

