customProperties:"formComponent:false,\
useCssPosition:true",
dataSource:"db:/settingsai/servers",
encapsulation:108,
items:[
{
cssPosition:"59,-1,-1,14,543,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"14",
right:"-1",
top:"59",
width:"543"
},
dataProviderID:"url",
placeholderText:"URL"
},
name:"textbox_754",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"5168C176-1F01-4E57-8444-ADEF15E26F7A"
},
{
height:480,
partType:5,
typeid:19,
uuid:"57D57C44-5AF8-47D5-9401-933A6303D49F"
},
{
cssPosition:"107,-1,-1,349,80,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"349",
right:"-1",
top:"107",
width:"80"
},
text:"new server"
},
name:"button_4",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9C8FBC75-C169-486F-A5A7-E7339734D071"
},
{
cssPosition:"102,-1,-1,11,180,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"11",
right:"-1",
top:"102",
width:"180"
},
onActionMethodID:"FDC2DDF7-CA27-4929-85C0-75086E85C01B",
text:"load models"
},
name:"load_models",
typeName:"bootstrapcomponents-button",
typeid:47,
uuid:"9F081C1A-52CF-4548-B771-C74B8F55C81B"
},
{
cssPosition:"19,-1,-1,14,543,30",
json:{
cssPosition:{
bottom:"-1",
height:"30",
left:"14",
right:"-1",
top:"19",
width:"543"
},
dataProviderID:"server_name",
placeholderText:"Name"
},
name:"textbox_842",
typeName:"bootstrapcomponents-textbox",
typeid:47,
uuid:"A5669EB6-5592-488C-ADF9-7CEE02B646FF"
},
{
cssPosition:"150,10,-1,10,600,280",
json:{
columns:[
{
dataprovider:"model_name",
id:"servers_to_models.model_name",
styleClassDataprovider:null,
svyUUID:"68E350D8-C217-4D52-BAE0-F77D9CB530D6"
}
],
cssPosition:{
bottom:"-1",
height:"280",
left:"10",
right:"10",
top:"150",
width:"600"
},
foundset:{
foundsetSelector:"servers_to_models"
}
},
name:"table_1",
typeName:"servoyextra-table",
typeid:47,
uuid:"D49EDAED-D802-452E-A0DA-0C2B619E15B3"
}
],
name:"servers",
navigatorID:"-1",
showInMenu:true,
typeid:3,
uuid:"A9C70E2E-6B03-4D0B-BE22-9E3F389DCBEA"