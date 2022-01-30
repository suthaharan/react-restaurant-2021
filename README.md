### References
* YouTube Link [https://www.youtube.com/watch?v=QwarZBtFoFA]
* GitHub Repo [https://github.com/machadop1407/react-website-tutorial]

### Setup environment
* NodeJS and NPM are required for the setup. Currently, the application uses Node v14.0.0 and NPM 6.14.4
* Setup the app in the current folder. Application comes with sample application

```javascript
$ npm create-react-app . 
```

To install router for react
```javascript
$ npm i react-router-dom
```

### Cleanup
Now time for cleanup. Let remove the below list of files
i) src/App.test.js
ii) src/index.css
iii) src/logo.svg
iv) src/setupTests.js
Followed by that cleanup the code from index.js and app.js (making sure there are no references to the deleted files)


### Material UI
* To setup material UI and to learn more about it visit 
    * Getting started [https://mui.com/getting-started/installation/]
    * Material icons [https://mui.com/components/material-icons/]
```
$ npm install @mui/material @emotion/react @emotion/styled
$ npm install @mui/icons-material
```

### State 

Whenever the value of the state changes, it will re-render the page. 

```javascript
const [openLinks, setOpenLinks] = useState(false);
const toggleNavbar = () => {
    setOpenLinks(!openLinks);
}

```