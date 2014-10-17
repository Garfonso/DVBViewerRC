/**
	For simple applications, you might define all of your models, collections,
	and sources in this file.  For more complex applications, you might choose to separate
	these kind definitions into multiple files under this folder.
*/

dvbviewerRC.apiSettings = new enyo.Model({
	username: "",
	password: "",
	url: "",
	dvbviewerName: "",
	id: "apiSettings"
});

//fetch from localStore
dvbviewerRC.apiSettings.source = enyo.LocalStorageSource.create({prefix: "info.mobo.dvbviewerRC"});
dvbviewerRC.apiSettings.fetch();
