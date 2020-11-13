# Garaji

Single page virtual garage sale platform. Users can browse, ask questions and finalize transactions without ever leaving the house.
!["Screenshot of Main Page"](docs/home-page2.png)

From the home screen, users can search for garage sales in a city near them. 
!["Screenshot of My sale button"](docs/search-city.png)

They can browse garage sales, and leave comments on items they are interested in. Seller responses are highlighted and users can delete their own comments.

!["Screenshot of Items on Garage"](docs/see-comments.png)

Buyers can filter items by category.
!["Screenshot of Categories"](docs/Inside-sale.png)

When a buyer is ready to buy, they click the 'I'll buy it' button. They confirm that they are happy to proceed with the transaction, and the seller receives a text with the buyer's details so that they can arrange a meeting.
!["Screenshot of Ill buy it"](docs/Send_Txt_Msg.png)

Logged in users can click the 'My sale' button to go straight to their own sale. 
They can also check the activity on their items. 
!["Screenshot of Comments"](docs/notifications.png)


Logged in users can click the 'Add Sale' button to create a new sale. 
!["Screenshot of add sale form"](docs/create-sale.png)

Then, inside of the sale, they can use the 'Add item' button to add products to the sale. 
!["Screenshot of add new product button"](docs/create-product.png)

Single Page Garajiji with following behaviours:
  - User can browse existing garage sales by name of city
  - Logged in user can create new garage sale, or can edit/delete existing owned garage sales
  - Logged in user can create new items on existing garage sales, or can edit/delete existing items
  - Items on garage sales can be filtered by item categories
  - User can click the details to see description of the item or can write the comments about the item
  - Author of comment can delete the comment
  - Owner of garage sale can receive the notification when there is new comments on item
  - User can send text to the seller and after buying the item turns into 'Sale pending' mode

## Group Members
  - Jaeyoung Kim
  - James Brown
  - Vladyslav Kutsevolov

## Tech Stack
  - Back End: NodeJs, Express, Postgres
  - Front End: React, Material UI
  - Test: Jest, Cypress

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Fork https://github.com/9boogie/garagesale-server , then clone your fork to this repository.
4. Install dependencies using the `npm install` command.
5. Creatae database on postregres and run the schema and seeds.
6. Start the server using the `npm run dev` command. The app will be served at <http://localhost:3001/>.
6. Start the web client using the `npm start` command. The app will be served at <http://localhost:3000/>.
7. Go to <http://localhost:3000/> in your browser.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```
