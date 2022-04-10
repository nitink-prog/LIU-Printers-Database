# LIU Printers Database - Firebase Version

A React app that displays a list of printers on Long Island University's Brooklyn Campus pulled from a Firebase Firestore database. Combines many React practices into a webapp for the IT Department to utilize.

## Studies

### React Hooks

- useState
- useEffect
- useRef

### React Router Hooks

- useParams
- useHistory

### Firebase Firestore Database

- Connection to cloud stored backend database.
- Efficient configuration of database.
- Pulling real-time data and handling errors.
  - Changes to any recipe are instantly reflected in the Home page and the Recipe page.
- Search for recipes in the directory.

### APIs

- Handling returned data safely with Loading state and Error handling.
- Mapping data for visually appealing table display.
- Dropdown menu for displaying data based on particular building.

### Component Tree

- Separation of pages and components.
  - `<Navbar />` is always rendered, with components rendered underneath depending on current route.
  - `<Printer />` component is reused.
- Passing children templates.

## Upcoming Features

- "Copy IP to Clipboard" button.
- Add a "Confirm" prompt when deleting a printer.
- Update the styling on "Building" dropdown on the "Add Printer" page.
- "Submit" button should not be touching the bottom the "Add Printer" page.
- Add placeholders within the input fields on "Add Printer" page.
- Add breadcrumbs as we navigate through page routes.
- Move "Delete" button onto the "Details" page.

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
