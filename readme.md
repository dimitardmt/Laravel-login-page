## Features

These are the main features:
- 2 endpoints API , one that when passed login and password details, displays the user id if the details match, and another one which for an id returns the username.
- A front-end consisting of 2 text-boxes , 1 for a login and 1 for the password, and a submit button, linked to the back-end API.

## Details

- Homestead virtual machine
- Apache server
- Postgresql database
- React front-end

## API-keys

- /verification keys are login and pass
- /getuser key is id

The information of the login details could be found in the Table.csv file.

## Concerns and Future Improvements

- The CSRF feature was disabled, to enable the use of the POST method in the API, due to time restrictions. The back-end could be updated to make use of this.
- The passwords in the database could be hashed to improve security, but due to time constraints this was not included.
