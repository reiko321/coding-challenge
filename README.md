This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 'Welcome to GoDaddy ATM'

This project was created using React + Node.js + MongoDB.

Once the code is set, DB Seeds and NPM packages are installed you can load the App using 'NPM start'.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### 'Using the App'

There are four accounts which can be observed via the App:

    23416
    82352
    65275
    31038

The initial landing page will ask for one of these accounts. Once the account number is entered, the value will be checked against the DB entries for a match. Finding the account the display will update to show the account + balance. The back button will take you back and logging out from the NavBar up top will take you back to the landing page.     