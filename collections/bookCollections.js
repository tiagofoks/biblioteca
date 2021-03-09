const db = require('../db_config.js');

exports.list = (callback) => {
   
   db.Book.find({}, (error, books) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar os livros'});
      } else {

         callback(books);
      }
   });
};


exports.book = (book_title, callback) => {
   
   db.Book.findByBookName(book_title, (error, book) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar o livro'});
      } else {

         callback(book);
      }
   });
};


exports.save = (book_title, book_author, book_category, callback) => {
   
   new db.Book({

      'book_title': book_title,
      'book_author': book_author,
      'book_category': book_category,
      'created_at': new Date()
   }).save((error, book) => {
      
      if(error){
         
         callback({error:'Não foi possivel salconst o livro'});
      } else {

         callback(book);
      }
   })
};


exports.update = (id, book_title, book_author, book_category, callback) => {
   
   db.Book.findByBookName(book_title, (error, book)  => {

      if(book_title){
         
         book.book_title = book_title;
      }

      if(book_author){
         
         book.book_author = book_author;
      }

      if(book_category){
         
         book.book_category = book_category;
      }

      book.save((error, book) => {
      
         if(error){
         
            callback({error:'Não foi possivel salconst o livro'});
         } else {

            callback(book);
         }     
      });
   });
};

exports.list_book_title = (book_title, callback) => {
   
   db.Book.find({book_title: book_title}).sort({book_author: 1}).exec((error, book_titles) => {
      
      if(error){
      
         callback({error:'Não foi possivel retornar os livros'});
      } else {
      
         callback(book_titles);
      }
   });
};


exports.list_book_author = (book_author, callback) => {
   
   db.Book.find({book_author: book_author}).sort({book_title: 1}).exec((error, book_authors) => {
      
      if(error){
      
         callback({error:'Não foi possivel retornar os livros'});
      } else {
      
         callback(book_authors);
      }
   });
};

exports.save_booking = (book_title, book_author, User, status, callback) => {
   
   new db.Booking({

      'book_title': book_title,
      'book_author': book_author,
      'User': User,
      'status': status,
      'created_at': new Date(),
   }).save((error, booking) => {
      
      if(error){
         
         callback({error:'Não foi possivel salconst a reserva'});
      } else {

         callback(booking);
      }
   })
};

exports.list_booking = (callback) => {
   
   db.Booking.find({}, (error, bookings) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar as reservas'});
      } else {

         callback(bookings);
      }
   });
};

exports.booking = (book_title, callback) => {
   
   db.Booking.findByItem(book_title, book_author, (error, book_title) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar a reserva'});
      } else {

         callback(booking);
      }
   });
};

exports.delete = (id, callback) => {
   
   db.Book.findById(id, (error, book) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar o livro'});
      } else {

         book.remove((error) => {
            if(!error){
               
               callback({response: 'livro excluído com sucesso'});
            }
         });
      }
   });   
};

exports.delete = (id, callback) => {
   
   db.Booking.findById(id, (error, booking) => {
      
      if(error){
         
         callback({error:'Não foi possivel retornar a reserva'});
      } else {

         booking.remove((error) => {
            if(!error){
               
               callback({response: 'reserva excluída com sucesso'});
            }
         });
      }
   });   
};
