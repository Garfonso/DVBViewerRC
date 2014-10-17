/**
	For simple applications, you might define all of your views in this file.
	For more complex applications, you might choose to separate these kind definitions
	into multiple files under this folder.
*/

enyo.kind({
	name: "dvbviewerRC.MainView",
	kind: "FittableRows",
	fit: true,
	style: "text-align: center",
	bindings: [
		{from: "^.dvbviewerRC.API.apiError", to: ".$.ConnectionIndicator.visible"}
	],
	components:[
		{kind: "onyx.Toolbar", components: [
			{content: "DVBViewerRC"},
			{name: "ConnectionIndicator", classes: "indicator", ontap: "showSettings"}
		]},
		{name: "joystick", classes: "joystick"},
		{kind: "enyo.Scroller", fit: true, components: [
/*			{kind: "onyx.Groupbox", name: "osdBox", ontap: "activateOSD", components: [
				{content: "OSD", kind: "onyx.GroupboxHeader", name: "osdHeader"},
				{kind: "onyx.Drawer", name: "osdDrawer", style: "display: block; margin: 0px auto;", open: false, classes: "container", components: [
					{kind: "onyx.Button", content: "Senderliste", name: "osdChannelList", classes: "nice-padding", ontap: "osdChannelList"},
					{kind: "onyx.Button", content: "Videos", name: "osdVideos", classes: "nice-padding", ontap: "osdVideos"},
					{kind: "onyx.Button", content: "Musik", name: "osdMusik", classes: "nice-padding", ontap: "osdMusik"}
				]}
			]}*/
			{ kind: "dvbviewerRC.DrawerGroup", header: "OSD", components: [
				{kind: "onyx.Button", content: $L("Channel list"), name: "osdChannelList", classes: "nice-padding", ontap: "osdChannelList"},
				{kind: "onyx.Button", content: $L("Videos"), name: "osdVideo", classes: "nice-padding", ontap: "osdVideo"},
				{kind: "onyx.Button", content: $L("Music"), name: "osdMusic", classes: "nice-padding", ontap: "osdMusic"}
			]}
		]}
	],
	activateOSD: function (inSender, inEvent) {
		this.$.osdDrawer.setOpen(!this.$.osdDrawer.open);
	},
	osdChannelList: function (inSender, inEvent) {
		dvbviewerRC.API.sendAction("osdChannelList");
		return true;
	},
	osdVideo: function (inSender, inEvent) {
		dvbviewerRC.API.sendAction("osdVideo");
		return true;
	},
	osdMusic: function (inSender, inEvent) {
		dvbviewerRC.API.sendAction("osdMusic");
		return true;
	},
	
	showSettings: function () {
		
	}
});
