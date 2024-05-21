/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D5C6BCF3-5169-4E30-A932-A98761F08550"}
 */
var question = null;

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FDC2DDF7-CA27-4929-85C0-75086E85C01B"}
 */
function onAction_loadModels(event) {
	var recordServer = foundset.getSelectedRecord();
	scopes.AccessingAI.getModels(recordServer)
}


/**
 * @properties={typeid:24,uuid:"68CF77F2-2F2B-4307-9A77-2ECD307BB036"}
 */
function onAction_question() {
	var record = foundset.getSelectedRecord();
	scopes.AccessingAI.sendQuestion(record,null,question,null);
}