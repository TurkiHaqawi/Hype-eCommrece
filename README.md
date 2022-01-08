# hype E-Commerce	




## Description

***hype E-Commerce*** Hi everyone, this applcation for hype products => (hype clothes, hype Accessories, hype boots). We build this app with ❤️.

## User Stories

- **Signup:** As a user I can sign up in the platform so that I can complate payment.
- **Login:** As a user I can login to the platform so that I can complate payment.
- **Logout:** As a user I can logout from the platform.
- **See all Products** As a user I can see all the products in Home page.
- **See Categories** As a user I can Select on of the categories in the app.
- **See single product page** As a user I can see all information for selected product
- **Add product to the cart** As a user I can add products to my cart page
- **Control cart page** As a user I can control cart page => delete, update, add product

## Backlog

User :

- see all products
-	see categories
- add product to cart
- control cart page
- buy the product
- login
- register
- logout

Admin :

- add new products
- update product
-	see all users
- see all orders



# Client / Frontend

## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | Home page           | public `<Route>`           | Home page                                                    |
| `/signup`        | Register page           | anon only `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`         | Login Page            | anon only `<AnonRoute>`    | Login form, navigate to homepage after login |
| `/products/:category`     | ProductList   | public `<Route>`  | Shows all products depend on category name                              |
| `/product/:id` | Product   | public `<Route>` | Show single product with spcifice id                                          |
| `/cart` | Cart | user only `<Route>` | Show the products selected by the user                           |
| `//success` | Success                  | user only `<PrivateRoute>` | If payment complated                                           |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |
|                  |                      |                            |                                                              |

## Components

- Announcement
- Navbar
- Slider
- Categories
- CategoryItem
- ProductItem
- NewsLetter
- Products
- Footer
- GardenTeam

## Pages

- Home
- Login
- Register
- ProductList
- Product
- Cart
- Success



# Server / Backend

## Models

User model

```
{
  username: { type: String, required: [true, "Username is required"], unique: true},
  email: { type: String, required: [true, "Email is required"], unique: true},
  password: { type: String, required: [true, "Password is required"] },
  isAdmin: { type: Boolean, default: false},
  img: {type: String}
}
```

Product model

```
 {
   title: { type: String, required: [true, "Product Title is required"], unique: true},
   desc: { type: String, required: [true, "Product Description is required"]},
   img: { type: String, required: [true, "Product Image is required"] },
   categories: {  type: Array },
   size: { type: Array },
   color: { type: Array },
   price: { type: Number, required: [true, "Product Price is required"]},
   inStock: { type: Boolean, default: true}
 }
```

Cart model

```
 {
   userId: { type: String, required: true },
   products: [ { productId: { type: String }, quantity: { type: Number, default: 1 }}]
 }
```

Order model

```
 {
   userId: {  type: String, required: true },
   products: [ { productId: { type: String }, quantity: { type: Number, default: 1 }}],
   amount: { type: Number, required: true},
   address: { type: Object, required: true },
   status: { type: String, default: "panding" }
 }
```


## Backend routes

| HTTP Method | URL            | Request Body                                                 | Success status | Error Status | Description                                                  |
| ----------- | -------------- | ------------------------------------------------------------ | -------------- | ------------ | ------------------------------------------------------------ |
| POST         | `/auth/register`     |      {username, email, password, isAdmin, img}                                                 | 201            | 409          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store with redux in localstorge           |
| POST        | `/auth/login` | {username, password}                                      | 200            | 404          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user with redux in localstorge |
| PUT        | `/users/:id`  | {username, email, password, isAdmin, img}                                         | 200            | 401          | Ckecks if Token is valid (403), and if no Token (401), information not match (403)  |
| DELETE        | `/users/:id` | (empty)                                                      | 200           | 403          | Ckecks if Token is valid (403), and if no Token (401), information not match (403)                                           |
| GET        | /users/find/:id      | (empty) |        200        |        403      | Just the Admin can get the single user, Ckecks if Token not valid (403), and if no Token (401), information not match (403) |
| GET         | /users  | (empty) |       200         |     403         | Just the admin can git all users, or with query, Ckecks if Token not valid (403), and if no Token (401), information not match (403)                  |
| POST         | /products |  {title, desc, img, category, size, color, price}                                                            |      201          |    400          | Used to allowe the Admin to add new products                   |
| PUT      | /products/:id  | {title, desc, img, category, size, color, price}                                                              |         200       |      401        | Just the admin can update product, Ckecks if Token not valid (403), and if no Token (401), information not match (403)                  |
| DELETE         | /products/:id      |   (empty)    |       200      |      401        | Just the admin can delete product, Ckecks if Token not valid (403), and if no Token (401), information not match (403) |
| GET         | /products/find/:id      | (empty)    |   200   |    500     | public any user can see single product |
| GET         | /products     | (empty)    |   200   |    500     | public any user can see products or with category name |
| POST         | /orders     | {userId, products, amount, address, status}    |   201   |    500     | Ckecks if Token not valid (403), and if no Token (401), somethin user mising in body  |
| PUT         | /orders/:id     | {userId, products, amount, address, status}    |   200   |    403     | Just the admin can update order, Ckecks if Token not valid (403), and if no Token (401), information not match (403)  |
| DELETE         | /orders/:id     | (empty)    |   200   |    401     | Just the admin can delete order, Ckecks if Token not valid (403), and if no Token (401), information not match (403)  |
| GET         | /orders/find/:id     | (empty)    |   200   |    401     | User can get order with spcifice orderId, Ckecks if Token not valid (403), and if no Token (401), information not match (403)  |
| GET         | /orders     | (empty)    |   200   |    401     | Just the admin can get all orders, Ckecks if Token not valid (403), and if no Token (401), information not match (403) |
| POST         | /cart     | {userId, products}    |   201   |    401     | user can create cart, Ckecks if Token not valid (403), and if no Token (401) |
| PUT         | /cart/:id     | (empty)    |   200   |    401     | user can update cart, Ckecks if Token not valid (403), and if no Token (401), information not match (403) |
| DELETE         | /cart/:id     | (empty)    |   200   |    401     | user can delete cart, Ckecks if Token not valid (403), and if no Token (401), information not match (403) |
| GET         | /cart/find/:id   | (empty)    |   200   |    401     | user can get cart with spacifice cartId, Ckecks if Token not valid (403), and if no Token (401), information not match (403) |
| GET         | /cart   | (empty)    |   200   |    401     | Just the admin can get all cart, Ckecks if Token not valid (403), and if no Token (401), information not match (403) |
| POST         | /payment   | {tokenId, amount, currency}    |   201   |    401    | Ckecks if the user logged in (Token), and continue payment  |

## Links

### Trello

[Link to your trello board](https://trello.com/b/zNbK2C4h/e-commerce-app)

### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deployed App Link]()

### Slides

The url to your presentation slides

[Slides Link]()

###  Wireframe

[Figma Link](https://www.figma.com/file/LTkd1BE89sxQ1AYzxdqdwT/Untitled)

We build this app with ❤️
