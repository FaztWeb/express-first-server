var items = [
	{id: 1, name: 'product1'},
	{id: 2, name: 'product2'},
	{id: 3, name: 'product3'}
];

const index = (req, res, next) => {
	res.render('index', {
		title: 'MyWebStore'
	});
};

const getProducts = (req, res, next) => {
	res.render('products', {
		title: 'List of Products',
		items
	});
};

const addProduct = (req, res) => {

	var newItem = req.body.newItem;
	console.log(newItem);

	items.push({
		id: items.length + 1,
		name: newItem
	});

	res.redirect('/products');
};

module.exports = {
  index,
  getProducts,
  addProduct
};
