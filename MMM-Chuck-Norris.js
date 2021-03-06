/* Magic Mirror Module: MMM-Chuck-Norris
 * Version: 1.0.0
 *
 * By Todd Santoro https://github.com/toddsantoro/ https://toddsantoro.com/
 * MIT Licensed.
 */
Module.register("MMM-Chuck-Norris", {
	defaults: {
		updateInterval: 20000,
		retryDelay: 5000,
		title: ""
	},

	// Required version of MagicMirror
	requiresVersion: "2.1.0",

	start: function() {
		var self = this;
		var dataRequest = null;
		var dataNotification = null;

		//Flag for check if module is loaded
		this.loaded = false;

		// Schedule update timer.
		this.getData();
		setInterval(function() {
			self.updateDom();
		}, this.config.updateInterval);
	},
	/*
	 * getData
	 * function example return data and show it in the module wrapper
	 * get a URL request
	 *
	 */
	getData: function() {
		var self = this;
		var urlApi = "https://api.chucknorris.io/jokes/random";
		var retry = true;
		var dataRequest = new XMLHttpRequest();
		dataRequest.open("GET", urlApi, true);
		dataRequest.onreadystatechange = function() {
			console.log(this.readyState);
			if (this.readyState === 4) {
				console.log(this.status);
				if (this.status === 200) {
					self.processData(JSON.parse(this.response));
				} else if (this.status === 401) {
					self.updateDom(self.config.animationSpeed);
					Log.error(self.name, this.status);
					retry = false;
				} else {
					Log.error(self.name, "Could not load data.");
				}
				if (retry) {
					self.scheduleUpdate((self.loaded) ? -1 : self.config.retryDelay);
				}
			}
		};
		dataRequest.send();
	},
	/* scheduleUpdate()
	 * Schedule next update.
	 *
	 * argument delay number - Milliseconds before next update.
	 *  If empty, this.config.updateInterval is used.
	 */
	scheduleUpdate: function(delay) {
		var nextLoad = this.config.updateInterval;
		if (typeof delay !== "undefined" && delay >= 0) {
			nextLoad = delay;
		}
		nextLoad = nextLoad ;
		var self = this;
		setTimeout(function() {
			self.getData();
		}, nextLoad);
	},
	getDom: function() {
		var self = this;
		// create element wrapper for show into the module
		var wrapper = document.createElement("div");
		var titleH3 = document.createElement("h3");
		titleH3.innerHTML = this.config.title;
		// If this.dataRequest is not empty
		if (this.dataRequest) {
			var wrapperDataRequest = document.createElement("div");
			wrapperDataRequest.className = "chuck-norris-fact";
			// check format https://jsonplaceholder.typicode.com/posts/1
			wrapperDataRequest.innerHTML = this.dataRequest.value;
			var labelDataRequest = document.createElement("label");
			// Use translate function
			// this id defined in translations files
			// labelDataRequest.innerHTML = this.translate("TITLE");
			wrapper.appendChild(titleH3);
			wrapper.appendChild(labelDataRequest);
			wrapper.appendChild(wrapperDataRequest);
		}
		// Data from helper
		if (this.dataNotification) {
			var wrapperDataNotification = document.createElement("div");
			// translations  + datanotification
			//wrapperDataNotification.innerHTML =  this.translate("UPDATE") + ": " + this.dataNotification.date;
			wrapper.appendChild(wrapperDataNotification);
		}
		return wrapper;
	},
	getScripts: function() {
		return [];
	},
	getStyles: function () {
		return [
			"MMM-Chuck-Norris.css",
		];
	},
	// Load translations files
	getTranslations: function() {
		//FIXME: This can be load a one file javascript definition
		return {
			en: "translations/en.json",
			es: "translations/es.json"
		};
	},
	processData: function(data) {
		var self = this;
		this.dataRequest = data;
		if (this.loaded === false) { self.updateDom(self.config.animationSpeed) ; }
		this.loaded = true;
		// the data if load
		// send notification to helper
		this.sendSocketNotification("MMM-Chuck-Norris-NOTIFICATION", data);
	},
	// socketNotificationReceived from helper
	socketNotificationReceived: function (notification, payload) {
		if(notification === "MMM-Chuck-Norris-NOTIFICATION") {
			this.loaded = true;
			// set dataNotification
			this.dataNotification = payload;
			this.updateDom();
		}
	},
});
