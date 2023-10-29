1. download a loading icon and add as a web file in the process app
2. add the html code inside custom html in the UI - makes suer to add the custom html on top of the page
3. Add the below line of code on button click and on boundary event

- add the below line on button click - this will show the loading icon
if(!!document.querySelector(".preloader_hide"))
		`document.querySelector(".preloader_hide").className = "preloader";`

- add this below line on boundary event of the button - this will hide the loading icon
`document.querySelector(".preloader").className = "preloader_hide";`
