# App Name

Doctor Finder

**An app by Brynna Klamkin-McCarter**

This app utilizes the BetterDoctors API (https://developer.betterdoctor.com/) to allow users to enter a medical condition to view a list of the top 20 local doctors for that specialization.

## Installation

Requires **npm** and **bower** installed in order to run.

Step 1: **Clone this repository to your local computer**

```console
git clone [url]
```

Step 2: **Install all development and production dependencies from the project root directory**

```console
npm install
```
```
bower install
```

Step 3: **Create a file called `.env` in your root directory and export your API key as `apiKey`**

```js
exports.apiKey = "YOUR KEY HERE";
```

Step 4: **Use _gulp_ to build compile the app**

```console
gulp build
```

**Note:** You can create a minified production build of the app by adding the `--production` tag

```console
gulp build --production
```

Step 5: **Use _Browser Sync_ to run a local server instance**

```console
gulp serve
```

## Known Bugs

## License

MIT License. Copyright 2017 Brynna Klamkin-McCarter
