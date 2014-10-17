enyo.singleton({
	name: "dvbviewerRC.API",
	
	published: {
		url: "http://127.0.0.1:8089/",
		username: "user",
		password: "pw",
		dvbviewerName: "HTPC",
		apiError: true
	},
	bindings: [
		{from: "^.dvbviewerRC.apiSettings.url", to: ".url"},
		{from: "^.dvbviewerRC.apiSettings.username", to: ".username"},
		{from: "^.dvbviewerRC.apiSettings.password", to: ".password"},
		{from: "^.dvbviewerRC.apiSettings.dvbviewerName", to: ".dvbviewerName"}
	],
	commandSeperator: "%0D", //or \r ?
	
	actionName2Id: {
		
	},
	
	buildBaseCommandUrl: function () {
		return this.url + "api/dvbcommand.html?target=" + this.dvbviewerName + "cmd=";
	},
	
	sendAction: function (actionName) {
		var req = new enyo.Ajax({
			url: this.buildBaseCommandUrl + "-x" + this.actionName2Id[actionName],
			method: "GET",
			username: this.username,
			password: this.password
		});
		
		if (!this.actionName2Id[actionName]) {
			this.error("No actionId for " + actionName);
		}
		
		req.go();
		req.response(this.bindSafely("success"));
		req.error(this.bindSafely("error"));
	},
	playFile: function (filePath) {
		var req = new enyo.Ajax({
			url: this.buildBaseCommandUrl + encodeURIComponent(filePath),
			method: "GET",
			username: this.username,
			password: this.password
		});

		req.go();
		req.response(this.bindSafely("success"));
		req.error(this.bindSafely("error"));
	},
	
	success: function () {
		this.log("Request suceeded.");
		this.setApiError(false);
	},
	failure: function (inSender, inEvent) {
		this.log("Request failed: ", inEvent);
		this.setApiError(true);
	}
});