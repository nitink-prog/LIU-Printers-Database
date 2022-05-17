# LIU Printers Database - MySQL Version

A full stack React app that displays a list of printers on Long Island University's Brooklyn Campus pulled from a MySQL database. For obvious reasons, the printer database is not included.

Combines many React practices into a webapp for the IT Department to utilize.

**This is the 3rd version of this full-stack program.** Firebase and JSON-Server versions are in the branches.

## Studies

MySQL, Express, React, Node Stack (MyERN?).

### React Paradigms

- useState
- useEffect
- useRef
- useParams
- useHistory
- Separation of pages and components.
  - `<Navbar />` is always rendered, with components rendered underneath depending on current route.
  - `<Printer />` component is reused.
  - Passing children templates.
- React Context and React Reducer to manage the global state of the theme (Dark mode and color).

###  MySQL Database

- Connection to MySQL database running in XAMPP - virtualized Linux environment.
- Efficient configuration of database.
  - Using PhpMyAdmin to create a structure for the database.
- Handling returned data safely with Loading state and Error handling.
- Search for printers in the directory.

### Express Middleware
This front-end application communicates with the back-end through Express middleware. 
I've made that available on GitHub as well: [LIU Printers MySQL Express Server](https://github.com/nitink-prog/LIU-Printers-MySQL-Express-Server)

- Set up API endpoints corresponding to printers in the database.
- Allow CORS requests.
- Set up HTTP methods to POST new printers, GET full database or single printer, PATCH and DELETE.

### Visuals

- Mapping data for visually appealing table display.
- User selection for Dark or Light Mode, and Color that apply to Navbar and all buttons.
  - Using dynamic styles.
- Animated outline when hovering over a printer in the table.

## Upcoming Features

[ ] "Copy IP to Clipboard" button.

[ ] Add a "Confirm" prompt when deleting a printer.

[ ] Update the styling on "Building" dropdown on the "Add Printer" page.

[ ] "Submit" button should not be touching the bottom the "Add Printer" page.

[ ] Add placeholders within the input fields on "Add Printer" page.

[ ] Add breadcrumbs as we navigate through page routes.

[X] Move "Delete" button onto the "Details" page.

## Outline

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── index.css
    ├── index.js
    ├── assets
    │   ├── darkmode-icon.svg
    │   └── delete-icon.svg
    ├── components
    │   ├── Navbar.css
    │   ├── Navbar.jsx
    │   ├── PrinterList.css
    │   ├── PrinterList.jsx
    │   ├── Searchbar.css
    │   ├── Searchbar.jsx
    │   ├── ThemeSelector.css
    │   └── ThemeSelector.jsx
    ├── context
    │   └── ThemeContext.jsx
    ├── firebase
    │   └── config.jsx
    ├── hooks
    │   ├── useFetch.jsx
    │   └── useTheme.jsx
    └── pages
        ├── create
        │   ├── Create.css
        │   └── Create.jsx
        ├── home
        │   ├── Home.css
        │   └── Home.jsx
        ├── printer
        │   ├── Printer.css
        │   └── Printer.jsx
        └── search
            ├── Search.css
            └── Search.jsx
```
