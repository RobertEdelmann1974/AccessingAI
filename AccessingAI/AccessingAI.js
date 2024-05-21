/**
 * @type {{models: Array<{name: String, model: String, modified_at: String, size: Number, digest: String, details: {parent_model: String, format: String, family: String, familes: Array<String>}, parameter_size: String, quantization_level: String}>}}
 * @properties={typeid:35,uuid:"C7867E75-A6A0-451A-8645-06290AD33B9F",variableType:-4}
 */
var modelsObject = null;

/**
 * @type {plugins.http.HttpClient}
 *
 * @properties={typeid:35,uuid:"28C305A7-6D14-4C26-83AC-D1B34C4A5419",variableType:-4}
 */
var httpClient = null;


/**
 * @type {String}
 * @properties={typeid:35,uuid:"5FD26A29-91A0-4C3D-ABE9-1E74279B2A20"}
 */
var answer = null;

/**
 * @type {String}
 * @properties={typeid:35,uuid:"3A79001E-113D-4431-8F61-D2467E955D84"}
 */
var context = null;

/**
 * @param {JSRecord<db:/settingsai/servers>} recordServer
 * @param {JSRecord<db:/settingsai/models>} recordModel
 * @param {String} question
 * @param {String} context
 * @properties={typeid:24,uuid:"E1E5A0D1-721A-4BBB-9DCB-FB39E8C1D605"}
 */
function sendQuestion(recordServer, recordModel, question, context) {
	if (!recordServer || !recordServer.url) {
		return;
	}

	var url = recordServer.url;
	var modelName = 'llama3'
	if (!question) {
		question = 'Who are the first developers of Servoy?'

	}
	httpClient = plugins.http.createNewHttpClient();
	var requestObject = {
		"model": modelName,
		"prompt": question,
		"stream": false
	}
	var postReq = httpClient.createPostRequest(url + '/api/generate');
	postReq.addHeader('Content-Type', 'application/json');
	postReq.setBodyContent(JSON.stringify(requestObject));
	postReq.executeAsyncRequest(testAISuccess_callback, testAIError_callback, [requestObject])
}

/**
 * @param {plugins.http.Response} responseAI
 * @param {Object} requestObject
 *
 * @properties={typeid:24,uuid:"C5BA7A3F-C355-4463-B4ED-B650D3EFCF87"}
 */
function testAISuccess_callback(responseAI, requestObject) {
	application.output('Meldung ist: ' + responseAI.getStatusCode().toString())
	application.output(responseAI.getResponseBody())
	if(responseAI.getStatusCode() == 200) {
		var response = JSON.parse(responseAI.getResponseBody());
		application.output('Anwort ist: ' + response['response'])
		answer = response['response'];
	}
	httpClient.close()
}

/**
 * @param {plugins.http.Response} responseAI
 * @param {Object} requestObject
 *
 * @properties={typeid:24,uuid:"088A1AB1-226B-48A8-9D7C-95B2009E8691"}
 */
function testAIError_callback(responseAI, requestObject) {
	application.output('Fehler.')
	httpClient.close()
}

/**
 * @param {JSRecord<db:/settingsai/servers>} recordServer
 * @properties={typeid:24,uuid:"3F375C0B-CEEC-477D-BEBE-13578108BE05"}
 */
function getModels(recordServer) {
	if (!recordServer || !recordServer.url) {
		return;
	}
	modelsObject = null
	httpClient = plugins.http.createNewHttpClient();
	var getRequest = httpClient.createGetRequest(recordServer.url + '/api/tags');
	var response = getRequest.executeRequest();
	var statusCode = response.getStatusCode() 
	if (statusCode >= 200 && statusCode <= 299) {
		modelsObject = JSON.parse(response.getResponseBody());
		var modelList = modelsObject['models'];
		for (var iModels = 0; iModels < modelList.length; iModels++) {
			var recordModel = recordServer.servers_to_models.getRecord(recordServer.servers_to_models.newRecord());
			recordModel.model_name = modelList[iModels].name;			
			recordModel.model_info = JSON.stringify(modelList[iModels]);
			databaseManager.saveData(recordModel);
		}
	}
}