(function () {
    function logEvent(eventName, element) {
        console.log(Date.now(), eventName, element.getAttribute('data-src'), element.getAttribute('src'));
    }

    var llWebp = new LazyLoad({
        elements_selector: ".lazy",
        to_webp: true,

        callback_enter: function (element) {
            logEvent("ENTERED", element);
        },
        callback_load: function (element) {
            logEvent("LOADED", element);
        },
        callback_set: function (element) {
            logEvent("SET", element);
        },
        callback_error: function (element) {
            logEvent("ERROR", element);
            element.src = "https://placehold.it/220x280?text=Placeholder";
        }
    });

}());