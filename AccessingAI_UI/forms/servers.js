
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
