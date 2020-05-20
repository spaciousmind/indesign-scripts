#target indesign

var doc = app.activeDocument;
var myImage = app.selection[0].images[0];
var myLink = app.selection[0].graphics[0].itemLink;
var myLinkfp = myLink.filePath;
var myLinkName = myLink.name.match(/(.*)(\.[^\.]+)/)[1];
var myLinkcurrentFolder = myLink.filePath.match(/^(.*[\:])/)[1];


$.writeln("myLinkfp = " +myLinkfp);
$.writeln("myLinkName = " +myLinkName);
$.writeln("myLinkcurrentFolder  = " +myLinkcurrentFolder );

		CreateBridgeTalkMessage(myLinkfp, myLinkName);

		function CreateBridgeTalkMessage(imagePath, myLinkName) {
	var bt = new BridgeTalk();
	bt.target = "photoshop";
	$.writeln("imagePath = " +imagePath);
	bt.body = ResaveInPS.toSource()+"("+imagePath.toSource()+ "," + myLinkName.toSource()+");";
	bt.onError = function(errObj) {
		}
	bt.onResult = function(resObj) {
        		}
	bt.send(30);
}

function ResaveInPS(imagePath, myLinkName) {
		app.displayDialogs = DialogModes.NO;
		var psDoc;
		var imagePath = imagePath.replace(/(^.*)(\u00BB.)/, "WIP:» ");

	$.writeln("imagePath = " + imagePath);
	$.writeln("myLinkName = " + myLinkName);

psDoc = app.open(new File(NEWPATH));
	app.displayDialogs = DialogModes.ALL;
}
