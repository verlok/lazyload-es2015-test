import LazyLoad from "./node_modules/vanilla-lazyload/dist/lazyload.es2015.js";

var lazyLoadInstance;

function logEvent(eventName, element) {
	console.log(
		Date.now(),
		eventName,
		element.getAttribute("data-src"),
		element.getAttribute("src")
	);
}

var lazyLoadOptions = {
	elements_selector: ".lazy",
	to_webp: true,

	callback_enter: element => {
		logEvent("ENTERED", element);
	},
	callback_load: element => {
		logEvent("LOADED", element);
	},
	callback_set: element => {
		logEvent("SET", element);
	},
	callback_error: element => {
		logEvent("ERROR", element);
		element.src = "https://placehold.it/220x280?text=Placeholder";
	}
};

var createLazyLoadInstance = () => {
	lazyLoadInstance = new LazyLoad(lazyLoadOptions);
};

document.addEventListener("DOMContentLoaded", createLazyLoadInstance);
