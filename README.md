<h1 align="center">Varthak Assignment</h1>

## Deployed link

<br>
https://varthakb.onrender.com/

<br>

## Installation

```
npm install
```

## Start the Backend server 

```
npm run start

npm run server
```


<br>

##  MVC Structure

```
├── logs
|    └── api.log
├── src
     ├── config
     |    └── config.ts
     ├── controllers
     |    └── bookController.ts
     |    └── userController.ts
     ├── logger
     |    └── logger.ts
     ├── middleware
     |    └── authenticate.ts
     |    └── authorize.ts
     ├── models
     |    └── BooksModel.ts
     |    └── UserModel.ts
     ├──routes
     |    └── bookRoute.ts
     |    └── userRoute.ts
     └── index.ts
```
Things to do before starting the server:- 

-  create `.env` file and put "PORT", "MONGOBD", "secret".
- "PORT" is for listening the server.
- "MONGOBD" write your mongo url here.
- "secret" write your jwt secret key here

<br>

## Schema 

<br>

<h3><strong>Schema for signUp</strong><h3>

```js

{
    "name": "enter your name ,
    "email": "enter your email here",
    "password": "enter your password here",
    role: "CREATOR"
}
```
<h3><strong>signup as dual role CREATOR as well as VIEWER it allows you to post book and allow to view and update </strong><h3>

```js

{
    "name": "enter your name ,
    "email": "enter your email here",
    "password": "enter your password here",
    role: ["CREATOR","VIEWER"]
}
```

<h3><strong>Schema for creating/posting  book</strong><h3>

```js
{
    bookName: "Enter book name",
    "writer":"enter writer name here",
    "price": enter price here in number, 
  }
```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/signup</td>
            <td>This endpoint should allow users to register</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/login</td>
            <td>This endpoint should allow users to login.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/book</td>
            <td>This endpoint is used to create new book with role of CREATOR if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr>
         <tr>
            <td>DELETE</td>
            <td>/book/:creatorID</td>
            <td>This endpoint is used to delete a book with role of CREATOR if valid token present in headers authorization with Bearer</td>
            <td>201</td>
        </tr>
         <tr>
            <td>PUT</td>
            <td>/book/:creatorId</td>
            <td>This endpoint is used to update details in book with role of CREATOR if valid token present in headers authorization with Bearer</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/books</td>
            <td>This endpoint is used view book with role of VIEWER/VIEW_ALL if valid token present in headers authorization with Bearer</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/books?old/new=1</td>
            <td>This endpoint is for view books with show book according to time if valid token present in headers authorization with Bearer</td>
            <td>200</td>
        </tr> 
    </tbody>
</table>


<br>

## Thank you for visiting

