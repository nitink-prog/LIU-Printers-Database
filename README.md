# LIU Printers Database

A React app that displays a table of departmental printers pulled from an API, and allows addition of new printers.

### Studies

- React Hooks
  - useState
  - useEffect
  - useRef
  - Custom React Hooks
    - useFetch hook, created as an independent and general-purpose hook for GETting data, with Optional Parameters that allow it to be used for GET, POST, PATCH, etc.
- APIs and JSON
  - Used _json-server_ node package to locally host an API created from `./data/db.json`.
  - Handling returned data safely with Loading state and Error handling.
  - Mapping data for visually appealing table display.
  - Dropdown menu for displaying data based on particular building.
- Component Tree
  - Separation of components, states, and passing of props.
  - Passing of children templates.

### Outline

- **App.js**

  - States
    - Bool for showing Modal.
    - String for current _url_.
  - Variables
    - `printers` holds the latest data from the JSON server.
  - Functions
    - `handleClickAddNewModalClose` is a handler function to ensure that the Modal is closed onClick.
  - Return
    - Hard-coded title.
    - Button for adding a new printer, which invokes `<Modal />` with child `<NewPrinterForm />`.
    - Calls `<TableFilters` component which displays a dropdown to filter by building.
    - Calls `<PrinterTable />` component which displays a table with all printers and corresponding information.

- **NewPrinterForm.jsx**
  - States
    - Creates 8 states, 1 for each aspect of a printer. These states are used for controlled inputs in the return.
  * Functions
    - `resetForm` sets all states to default values after submission. This could also be tied to a button.
    - `handleSubmit` prevents the default refresh, creates a `printer` object with all of the aspects of a printer currently stored in states. Then, POSTs this object to the JSON server, and finally resets the form.
  * Return
    - Heading for the Modal.
    - All input fields with controlled inputs and corresponding spans.
    - Submit button.

### Planned Features

- Edit (_PATCH_) a printer already in the database.
- Delete a printer.
- Text search bar.
- Better styling.

### Known Issues

- The `<NewPrinterForm />` is called in **App.js** as a child of `<Modal />`. `<PrinterTable />` is also called in **App.js**.
  - onSubmit, we want the `<PrinterTable />` to re-render so that it displays the newest printer.
  - Currently this is handled by abusing the fact that useState compares reference values rather than variable values. The _url_ state is changed to a `new String` with the same value as _url_, like this in **NewPrinterForm.jsx**: `setUrl((url = new String(url)));`
  - So, this works, but I think the old _url_ variable still exists somewhere in the browser session memory.
