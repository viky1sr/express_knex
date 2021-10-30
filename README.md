# express_knex

## How to Run
* npm run dev

## How to Migrate
* cd database => migrate:result

## Routing 
User = [
* http://localhost:8080/api/v1/users (type: post / create)
* http://localhost:8080/api/v1/users (type: get / get Users)
* http://localhost:8080/api/v1/user/id (type: get / get User)
* http://localhost:8080/api/v1/user/id (type: put / update User)

]

Book = [
* http://localhost:8080/api/v1/books (type: post / create)
* http://localhost:8080/api/v1/books (type: get / get Books)
* http://localhost:8080/api/v1/book/id (type: get / get Book)
* http://localhost:8080/api/v1/book/id (type: put / update Book)
] 

UserHasBooks = [
* http://localhost:8080/api/v1/user-books/user_id (type: post / create)
* http://localhost:8080/api/v1/user-books/user_id (type: get / get your books)
* http://localhost:8080/api/v1/user-book/user_id/id (type: get / get your book)
* http://localhost:8080/api/v1/user-book/user_id/id (type: put / update your book)
]