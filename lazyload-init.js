import LazyLoad from "./node_modules/vanilla-lazyload/dist/lazyload.es2015.js";

function logElementEvent(eventName, element) {
	console.log(Date.now(), eventName, element.getAttribute("data-src"));
}

var lazyLoadOptions = {
	elements_selector: ".lazy",

	callback_enter: function(element) {
		logElementEvent("--> ENTERED", element);
	},
	callback_exit: function(element) {
		logElementEvent("<-- EXITED", element);
	},
	callback_reveal: function(element) {
		logElementEvent("-o- REVEALED", element);
	},
	callback_loaded: function(element) {
		logElementEvent("-O- LOADED", element);
	},
	callback_error: function(element) {
		logElementEvent("::: ERROR", element);
		element.src =
			"https://placeholdit.imgix.net/~text?txtsize=21&txt=Fallback%20image&w=220&h=280";
	},
	callback_finish: function() {
		logElementEvent("\\o/ FINISHED", document.documentElement);
	}
};

var createLazyLoadInstance = () => {
	window.gLazyLoad = new LazyLoad(lazyLoadOptions);
};

document.addEventListener("DOMContentLoaded", createLazyLoadInstance);
