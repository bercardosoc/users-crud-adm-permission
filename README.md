# Users CRUD and ADM permission

This is an exercise from Kenzie Academy Brasil to train users crud with Node.js Express using JWT and bcrypt libraries.

---

(PT-BR) Este é um exercício da Kenzie Academy Brasil para treinar o crud de usuários com Node.js Express usando as bibliotecas JWT e Bcrypt. 


## Requests and Responses

### Register

POST - `http://localhost:3000/users` 

```json

{
	"name": "John Doe",
	"email": "john@mail.com",
	"password": "987654321",
	"isAdm": false
}

```
POST - `http://localhost:3000/users` - 200 OK


```json
{
	"id": "20afbd3d-1f5c-4fb6-aa55-0b87d689e669",
	"name": "John Doe",
	"email": "john@mail.com",
	"isAdm": false,
	"password": "$2a$10$rijV.3mCoMmvMw51dXgfWusvud4ZThUJqMFrd2VE1x30EPDCrjoLG",
	"createdOn": "Sat May 14 2022 13:45:04 GMT-0300 (Brasilia Standard Time)",
	"updatedOn": "Sat May 14 2022 13:45:04 GMT-0300 (Brasilia Standard Time)"
}
```

POST - `http://localhost:3000/users` - 400 Bad Request

If I try to register the same email again:

```json
{
	"message": "This email is already taken"
}
```
### Login

POST - `http://localhost:3000/login`

```json
{
	"email": "john@mail.com",
		"password": "987654321"
}
```

If everything is right:

POST - `http://localhost:3000/login` - 200 OK

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AbWFpbC5jb20iLCJpYXQiOjE2NTI1NDY5NTksImV4cCI6MTY1MjU1MDU1OX0.uTLtlxLzCoRw-y3zUZ43RmqXXg8Lfd5eg2vmnilThuQ"
}
```

However, if your email or password is wrong:

POST - `http://localhost:3000/login` - 400 Bad Request

```json
{
	"message": "Wrong email or password"
}
```
### User Profile

It is necessary to insert the token from login to have access. 

GET - `http://localhost:3000/users/profile` - 200 OK

```json
{
	"id": "47000dd2-1e85-49b2-9c6d-e097454bef97",
	"name": "John Doe",
	"email": "john@mail.com",
	"isAdm": false,
	"password": "$2a$10$WlMupMuA060zJzOUSvAvTev9jVjDKR0uvld3ISLfHokY8sgodxlUq",
	"createdOn": "Sat May 14 2022 14:11:30 GMT-0300 (Brasilia Standard Time)",
	"updatedOn": "Sat May 14 2022 14:11:30 GMT-0300 (Brasilia Standard Time)"
}
```

### All users

It is necessary to be a administrator to access this route and insert its token.

GET - `http://localhost:3000/users/profile` - 200 OK

```json

[
	{
		"id": "86cb86ed-bcc1-408c-a1e8-d703ae1092fd",
		"name": "Billie Doe",
		"email": "billie@mail.com",
		"isAdm": true,
		"password": "$2a$10$BMJYDWrQNmF79o.3JOjnBOnhj7AzOUbY61vOHTU7f3Kkg4BvHCpMO",
		"createdOn": "Sat May 14 2022 14:26:05 GMT-0300 (Brasilia Standard Time)",
		"updatedOn": "Sat May 14 2022 14:26:05 GMT-0300 (Brasilia Standard Time)"
	},
	{
		"id": "a2fb5a2c-115c-4bd2-9796-98bc3eea7b8b",
		"name": "Jogn Doe",
		"email": "John@mail.com",
		"isAdm": true,
		"password": "$2a$10$1fos0VMXDlNLyavdUZQRN.CNe8wWNq3.bQjSD.3dh3ci2Z/Vhyg6C",
		"createdOn": "Sat May 14 2022 14:26:35 GMT-0300 (Brasilia Standard Time)",
		"updatedOn": "Sat May 14 2022 14:26:35 GMT-0300 (Brasilia Standard Time)"
	}
]

```

GET - `http://localhost:3000/users/profile` - 401 Unauthorized

```json
{
	"message": "You should be an adm to see this route"
}
```

### Update 

It is necessary to be the owner to update or the administrador to insert a token.

PATCH - `http://localhost:3000/users/:userid`

```
{
	"name": "Billy",
	"email": "bill@mail.com"
}
```

PATCH - `http://localhost:3000/users/86cb86ed-bcc1-408c-a1e8-d703ae1092fd``- 200 OK

```json
{
	"id": "86cb86ed-bcc1-408c-a1e8-d703ae1092fd",
	"isAdm": true,
	"password": "$2a$10$BMJYDWrQNmF79o.3JOjnBOnhj7AzOUbY61vOHTU7f3Kkg4BvHCpMO",
	"createdOn": "Sat May 14 2022 14:26:05 GMT-0300 (Brasilia Standard Time)",
	"updatedOn": "Sat May 14 2022 14:28:36 GMT-0300 (Brasilia Standard Time)"
}
```

PATCH - `http://localhost:3000/users/86cb86ed-bcc1-408c-a1e8-d703ae1092fd` - 400 Bad Request

```JSON
"User not found"
```

### Delete

It is necessary just insert the token being the owner or the administrador. Request body should be empty.

DELETE - `http://localhost:3000/users/:userid` 

We are goind to delete the same user we had update:

DELETE - `http://localhost:3000/users/86cb86ed-bcc1-408c-a1e8-d703ae1092fd` - 200 OK

```JSON
"User deleted successfully"
```

Now, this user is deleted, so we cannot delete it again.

DELETE - `http://localhost:3000/users/86cb86ed-bcc1-408c-a1e8-d703ae1092fd` - 400 Bad Request

```JSON
"User not found"
```