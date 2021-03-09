const app = require('./app_config.js');

const userController = require('./controller/userController.js');

const validator = require('validator');

const bookCollections = require('./collections/bookCollections.js');

app.get('/', (req, res) => {
	
	res.end('Servidor ON!');
});

app.get('/users', (req, res) => {
	
	userController.list((resp) => {
		
		res.json(resp);
	});
});

app.get('/users/:id', (req, res) => {
	
	const id = validator.trim(validator.escape(req.any('id')));

	userController.user(id, (resp) => {
		
		res.json(resp);
	});
});

app.post('/users', (req, res) => {

	const fullname = validator.trim(validator.escape(req.any('fullname')));
	const email = validator.trim(validator.escape(req.any('email')));
	const password = validator.trim(validator.escape(req.any('password')));

	userController.save(fullname, email, password, (resp) => {
		
		res.json(resp);
	});
});

app.put('/users', (req, res) => {

	const id = req.any('id');
	const fullname = req.any('fullname');
	const email = req.any('email');
	const password = req.any('password');

	userController.update(id, fullname, email, password, (resp) => {
		
		res.json(resp);
	});
});

app.delete('/users/:id', (req, res) => {
	
	const id = req.any('id');

	userController.delete(id, (resp) => {
		
		res.json(resp);
	});
});

app.get('/books', (req, res) => {
	
	bookCollections.list((resp) => {
		
		res.json(resp);
	});
});

app.get('/books/:book_title', (req, res) => {
	
	const book_title = validator.trim(validator.escape(req.any('book_title')));

	bookCollections.book(book_title, (resp) => {
		
		res.json(resp);
	});
});

app.post('/books', (req, res) => {

	const book_title = req.any('book_title');
	const book_author = req.any('book_author');
	const book_category = req.any('book_category');

	bookCollections.save(book_title, book_author, book_category, (resp) => {
		
		res.json(resp);
	});
});

app.put('/books', (req, res) => {

	const id = req.any('id');
	const book_title = req.any('book_title');
	const book_author = req.any('book_author');
	const book_category = req.any('book_category');
	
	bookCollections.update(id, book_title, book_author, book_category, (resp) => {
		
		res.json(resp);
	});
});

app.get('/book_title/:book_title', (req, res) => {
	
	const book_title = validator.trim(validator.escape(req.any('book_title')));

	bookCollections.list_book_title(book_title, (resp) => {
		
		res.json(resp);
	});
});

app.get('/book_author/:book_author', (req, res) => {
	
	const book_author = validator.trim(validator.escape(req.any('book_author')));

	bookCollections.list_book_author(book_author, (resp) => {
		
		res.json(resp);
	});
});

app.post('/booking', (req, res) => {

	const book_title = req.any('book_title');
	const book_author = req.any('book_author');
	const User = req.any('User'),
	const status = req.any('status')

	bookCollections.save_booking(book_title, book_author, User, status, (resp) => {
		
		res.json(resp);
	});
});

app.get('/bookings', (req, res) => {
	
	bookCollections.list_booking((resp) => {
		
		res.json(resp);
	});
});

app.delete('/books/:id', (req, res) => {
	
	const id = req.any('id');

	bookCollections.delete(id, (resp) => {
		
		res.json(resp);
	});
});

app.delete('/bookings/:id', (req, res) => {
	
	const id = req.any('id');

	bookCollections.delete(id, (resp) => {
		
		res.json(resp);
	});
});

app.get('/booking/:id', (req, res) => {

	const id = req.any('id');
	
	bookCollections.bookingd(id, (resp) => {
		
		res.json(resp);
	});
});