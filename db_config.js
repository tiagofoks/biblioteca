const db_string = 'mongodb://127.0.0.1/biblioteca';

const mongoose = require('mongoose').connect(db_string);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'))

db.once ('open', () => {
	
	const userSchema = mongoose.Schema({
		
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);

	const bookSchema = mongoose.Schema({
		book_title: String,
		book_author: String,
		book_category: String,
		created_at: Date
	});

	exports.Book = mongoose.model('Book', bookSchema);


	const bookingSchema = mongoose.Schema({
		book_title: String,
		book_author: String,
		User: String,
		created_at: Date,
		devoluction_at: Date,
		status: Boolean
	});

	exports.Booking = mongoose.model('Booking', bookingSchema);
});