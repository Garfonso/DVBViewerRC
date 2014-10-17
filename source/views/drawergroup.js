enyo.kind({
	name: "dvbviewerRC.DrawerGroup",
	kind: "onyx.Groupbox",
	ontap: "toggleDrawer",
	published: {
		header: "."
	},
	bindings: [
		{ from: ".header", to: ".$.header.content" }
	],
	components: [
		{ kind: "onyx.GroupboxHeader", name: "header" },
		{kind: "onyx.Drawer", open: false, classes: "container"}
	],
	toggleDrawer: function () {
		this.$.drawer.setOpen(!this.$.drawer.open);
	}
});