# How to Plan and Built A react Application

- for Small apps with one page and a few features
  1. Break the desired UI into components
  2. Build a static version(no state yet)
  3. Thinl about the state management+data flow
- IN REAL WORLD APPS(Rough overview)
  1. Gather application requirements and features
  2. Divide the application into pages
     2.1. Think about overall and page-level UI
     2.2. Break the desired UI into components
     2.3 Design and build a static version (no state yet)
  3. Divide the application into feature categories
     3.1. Think about state management + data flow
  4. Decide on what library to use(Technology decision)

---

> STEP 1

## Project requirements from the business

-> Very simple application ,where users can order one or more pizza from menu
-> Requires no user account and no login: user just input their names before using the app
-> The piza menu can chnage,so it should be loaded from API
-> User can add multiple pizza to a cart before ordering
-> Ordering requires just the name,phone number and address
-> if possible ,GPS location should also be provided to make delivery easier
-> User can mark their order as "priority" for an additional 20% of the cart price
-> Order are made by sending a POST request with the order data(user data+selected pizza) to API
-> Payments are made on delivery,so no payment processingt is necessary in the app
-> Each new order will gte usinque ID that should be deiaplyed so that use can later look up to their order based on the ID
-> User should be able to makr theri order as "prioroty" prder even after its has been placed

(From these requirements ,we can understand the features we need to implement)

> STEP 2 + 3

## Feature categories

(All features can be placed into one of these.So basically this is what the app will esssentially be about)

1. User -- Homepage
2. Menu -- Pizza menu
3. Cart -- Cart
4. Order -- Placing a new order,looking up a order

## Necessary Pages

1. Homepage /
2. Pizza Menu /menu
3. Cart /cart
4. Placing a new order /order/new
5. Looking up an order /order/:orderID

> STEP 3 + 4

## State Management + Technology decisions

1. User --> Global UI state(no account,so stays in app)
2. Menu --> Global remote state (menu is fetched from API)
3. Cart --> Global UI state(no need for API,just stored in app)
4. Order --> Global remote(fethched and submitted to API)

- Routing : React Router -> the standard for React SPA
- Styling : tailwinddcss -> thendy way of styling application
- Remote State Management : React Router -> New way of fetching data right insdei the react router(v6.4+) that is worth exploring("render-as-you-fetch" insted of "fetch-on-render") Not really state management as it doesnt persist state
- UI state management: redux -> state is fairly conplex.Redux has many advantages of UI state.
