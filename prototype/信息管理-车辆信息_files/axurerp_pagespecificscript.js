
var PageName = '信息管理-车辆信息';
var PageId = 'p656561a4e2bc4ed9bfc01187057e541a'
var PageUrl = '信息管理-车辆信息.html'
document.title = '信息管理-车辆信息';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $ItemTitle = '';

var $PostText = '';

var $NumPosts = '';

var $RatingMade = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&ItemTitle=' + encodeURIComponent($ItemTitle) + '&PostText=' + encodeURIComponent($PostText) + '&NumPosts=' + encodeURIComponent($NumPosts) + '&RatingMade=' + encodeURIComponent($RatingMade) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[ItemTitle\]\]/g, $ItemTitle);
  value = value.replace(/\[\[PostText\]\]/g, $PostText);
  value = value.replace(/\[\[NumPosts\]\]/g, $NumPosts);
  value = value.replace(/\[\[RatingMade\]\]/g, $RatingMade);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

eval(GetDynamicPanelScript('u390', 1));

eval(GetDynamicPanelScript('u450', 2));

var u33 = document.getElementById('u33');

var u402 = document.getElementById('u402');
gv_vAlignTable['u402'] = 'top';
var u65 = document.getElementById('u65');

var u545 = document.getElementById('u545');

u545.style.cursor = 'pointer';
if (bIE) u545.attachEvent("onclick", Clicku545);
else u545.addEventListener("click", Clicku545, true);
function Clicku545(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('29'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u585 = document.getElementById('u585');

u585.style.cursor = 'pointer';
if (bIE) u585.attachEvent("onclick", Clicku585);
else u585.addEventListener("click", Clicku585, true);
function Clicku585(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('18'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u561 = document.getElementById('u561');

u561.style.cursor = 'pointer';
if (bIE) u561.attachEvent("onclick", Clicku561);
else u561.addEventListener("click", Clicku561, true);
function Clicku561(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('06'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'center';
var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'top';
var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u470 = document.getElementById('u470');

u470.style.cursor = 'pointer';
if (bIE) u470.attachEvent("onclick", Clicku470);
else u470.addEventListener("click", Clicku470, true);
function Clicku470(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('06'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u157 = document.getElementById('u157');

var u129 = document.getElementById('u129');

var u590 = document.getElementById('u590');
gv_vAlignTable['u590'] = 'center';
var u417 = document.getElementById('u417');

var u555 = document.getElementById('u555');

u555.style.cursor = 'pointer';
if (bIE) u555.attachEvent("onclick", Clicku555);
else u555.addEventListener("click", Clicku555, true);
function Clicku555(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('03'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u598 = document.getElementById('u598');
gv_vAlignTable['u598'] = 'center';
var u175 = document.getElementById('u175');

var u0 = document.getElementById('u0');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'center';
var u131 = document.getElementById('u131');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u564 = document.getElementById('u564');
gv_vAlignTable['u564'] = 'center';
var u506 = document.getElementById('u506');

u506.style.cursor = 'pointer';
if (bIE) u506.attachEvent("onclick", Clicku506);
else u506.addEventListener("click", Clicku506, true);
function Clicku506(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('24'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u321 = document.getElementById('u321');

var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u99 = document.getElementById('u99');

var u576 = document.getElementById('u576');
gv_vAlignTable['u576'] = 'center';
var u386 = document.getElementById('u386');

var u322 = document.getElementById('u322');
gv_vAlignTable['u322'] = 'center';
var u510 = document.getElementById('u510');

u510.style.cursor = 'pointer';
if (bIE) u510.attachEvent("onclick", Clicku510);
else u510.addEventListener("click", Clicku510, true);
function Clicku510(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('26'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u277 = document.getElementById('u277');

var u247 = document.getElementById('u247');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u323 = document.getElementById('u323');

var u518 = document.getElementById('u518');

u518.style.cursor = 'pointer';
if (bIE) u518.attachEvent("onclick", Clicku518);
else u518.addEventListener("click", Clicku518, true);
function Clicku518(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('30'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u391 = document.getElementById('u391');

var u541 = document.getElementById('u541');
gv_vAlignTable['u541'] = 'center';
var u551 = document.getElementById('u551');

u551.style.cursor = 'pointer';
if (bIE) u551.attachEvent("onclick", Clicku551);
else u551.addEventListener("click", Clicku551, true);
function Clicku551(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('01'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u229 = document.getElementById('u229');

var u559 = document.getElementById('u559');

u559.style.cursor = 'pointer';
if (bIE) u559.attachEvent("onclick", Clicku559);
else u559.addEventListener("click", Clicku559, true);
function Clicku559(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('05'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'center';
var u366 = document.getElementById('u366');
gv_vAlignTable['u366'] = 'top';
var u51 = document.getElementById('u51');

var u459 = document.getElementById('u459');
gv_vAlignTable['u459'] = 'center';
var u331 = document.getElementById('u331');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u416 = document.getElementById('u416');

var u257 = document.getElementById('u257');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u622 = document.getElementById('u622');
gv_vAlignTable['u622'] = 'center';
var u278 = document.getElementById('u278');
gv_vAlignTable['u278'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u123 = document.getElementById('u123');

var u261 = document.getElementById('u261');

var u187 = document.getElementById('u187');

var u324 = document.getElementById('u324');
gv_vAlignTable['u324'] = 'center';
var u346 = document.getElementById('u346');
gv_vAlignTable['u346'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u608 = document.getElementById('u608');
gv_vAlignTable['u608'] = 'center';
var u27 = document.getElementById('u27');

var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u578 = document.getElementById('u578');
gv_vAlignTable['u578'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'center';
var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'center';
var u549 = document.getElementById('u549');

u549.style.cursor = 'pointer';
if (bIE) u549.attachEvent("onclick", Clicku549);
else u549.addEventListener("click", Clicku549, true);
function Clicku549(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('31'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u59 = document.getElementById('u59');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u360 = document.getElementById('u360');

u360.style.cursor = 'pointer';
if (bIE) u360.attachEvent("onclick", Clicku360);
else u360.addEventListener("click", Clicku360, true);
function Clicku360(e)
{

if (true) {

	self.location.href="Resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u573 = document.getElementById('u573');

u573.style.cursor = 'pointer';
if (bIE) u573.attachEvent("onclick", Clicku573);
else u573.addEventListener("click", Clicku573, true);
function Clicku573(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('12'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u103 = document.getElementById('u103');

var u529 = document.getElementById('u529');
gv_vAlignTable['u529'] = 'top';
var u9 = document.getElementById('u9');

var u556 = document.getElementById('u556');
gv_vAlignTable['u556'] = 'center';
var u107 = document.getElementById('u107');

var u368 = document.getElementById('u368');

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'top';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u314 = document.getElementById('u314');
gv_vAlignTable['u314'] = 'center';
var u125 = document.getElementById('u125');

var u596 = document.getElementById('u596');
gv_vAlignTable['u596'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u295 = document.getElementById('u295');

var u415 = document.getElementById('u415');

var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u143 = document.getElementById('u143');

var u613 = document.getElementById('u613');
gv_vAlignTable['u613'] = 'top';
var u454 = document.getElementById('u454');
gv_vAlignTable['u454'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u450 = document.getElementById('u450');

var u505 = document.getElementById('u505');
gv_vAlignTable['u505'] = 'center';
var u504 = document.getElementById('u504');

u504.style.cursor = 'pointer';
if (bIE) u504.attachEvent("onclick", Clicku504);
else u504.addEventListener("click", Clicku504, true);
function Clicku504(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('23'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u345 = document.getElementById('u345');

var u474 = document.getElementById('u474');

u474.style.cursor = 'pointer';
if (bIE) u474.attachEvent("onclick", Clicku474);
else u474.addEventListener("click", Clicku474, true);
function Clicku474(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('08'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u439 = document.getElementById('u439');

var u349 = document.getElementById('u349');

var u211 = document.getElementById('u211');

var u231 = document.getElementById('u231');

var u169 = document.getElementById('u169');

var u215 = document.getElementById('u215');

var u137 = document.getElementById('u137');

var u275 = document.getElementById('u275');

var u539 = document.getElementById('u539');
gv_vAlignTable['u539'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u369 = document.getElementById('u369');

var u85 = document.getElementById('u85');

var u77 = document.getElementById('u77');

var u300 = document.getElementById('u300');
gv_vAlignTable['u300'] = 'center';
var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u181 = document.getElementById('u181');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u364 = document.getElementById('u364');

var u540 = document.getElementById('u540');

var u423 = document.getElementById('u423');

var u251 = document.getElementById('u251');

var u595 = document.getElementById('u595');

u595.style.cursor = 'pointer';
if (bIE) u595.attachEvent("onclick", Clicku595);
else u595.addEventListener("click", Clicku595, true);
function Clicku595(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('23'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u109 = document.getElementById('u109');

var u476 = document.getElementById('u476');

u476.style.cursor = 'pointer';
if (bIE) u476.attachEvent("onclick", Clicku476);
else u476.addEventListener("click", Clicku476, true);
function Clicku476(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('09'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u414 = document.getElementById('u414');

var u255 = document.getElementById('u255');

var u424 = document.getElementById('u424');
gv_vAlignTable['u424'] = 'center';
var u259 = document.getElementById('u259');

var u612 = document.getElementById('u612');
gv_vAlignTable['u612'] = 'top';
var u607 = document.getElementById('u607');

u607.style.cursor = 'pointer';
if (bIE) u607.attachEvent("onclick", Clicku607);
else u607.addEventListener("click", Clicku607, true);
function Clicku607(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('29'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u13 = document.getElementById('u13');

var u466 = document.getElementById('u466');

u466.style.cursor = 'pointer';
if (bIE) u466.attachEvent("onclick", Clicku466);
else u466.addEventListener("click", Clicku466, true);
function Clicku466(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('04'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u305 = document.getElementById('u305');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u387 = document.getElementById('u387');
gv_vAlignTable['u387'] = 'center';
var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u279 = document.getElementById('u279');

var u336 = document.getElementById('u336');
gv_vAlignTable['u336'] = 'center';
var u458 = document.getElementById('u458');

u458.style.cursor = 'pointer';
if (bIE) u458.attachEvent("onclick", Clicku458);
else u458.addEventListener("click", Clicku458, true);
function Clicku458(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('2009 06 30'));

	SetPanelVisibilityu450("hidden");

}

}

var u480 = document.getElementById('u480');

u480.style.cursor = 'pointer';
if (bIE) u480.attachEvent("onclick", Clicku480);
else u480.addEventListener("click", Clicku480, true);
function Clicku480(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('11'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u630 = document.getElementById('u630');
gv_vAlignTable['u630'] = 'top';
var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u191 = document.getElementById('u191');

var u341 = document.getElementById('u341');

var u571 = document.getElementById('u571');

u571.style.cursor = 'pointer';
if (bIE) u571.attachEvent("onclick", Clicku571);
else u571.addEventListener("click", Clicku571, true);
function Clicku571(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('11'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u101 = document.getElementById('u101');

var u488 = document.getElementById('u488');

u488.style.cursor = 'pointer';
if (bIE) u488.attachEvent("onclick", Clicku488);
else u488.addEventListener("click", Clicku488, true);
function Clicku488(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('15'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u199 = document.getElementById('u199');

var u31 = document.getElementById('u31');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'center';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u225 = document.getElementById('u225');

var u63 = document.getElementById('u63');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u594 = document.getElementById('u594');
gv_vAlignTable['u594'] = 'center';
var u570 = document.getElementById('u570');
gv_vAlignTable['u570'] = 'center';
var u400 = document.getElementById('u400');
gv_vAlignTable['u400'] = 'top';
var u583 = document.getElementById('u583');

u583.style.cursor = 'pointer';
if (bIE) u583.attachEvent("onclick", Clicku583);
else u583.addEventListener("click", Clicku583, true);
function Clicku583(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('17'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u611 = document.getElementById('u611');
gv_vAlignTable['u611'] = 'top';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u119 = document.getElementById('u119');

var u537 = document.getElementById('u537');
gv_vAlignTable['u537'] = 'center';
var u205 = document.getElementById('u205');

var u302 = document.getElementById('u302');
gv_vAlignTable['u302'] = 'center';
var u289 = document.getElementById('u289');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u390 = document.getElementById('u390');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u467 = document.getElementById('u467');
gv_vAlignTable['u467'] = 'center';
var u281 = document.getElementById('u281');

var u574 = document.getElementById('u574');
gv_vAlignTable['u574'] = 'center';
var u503 = document.getElementById('u503');
gv_vAlignTable['u503'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u546 = document.getElementById('u546');
gv_vAlignTable['u546'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u384 = document.getElementById('u384');

var u521 = document.getElementById('u521');
gv_vAlignTable['u521'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u362 = document.getElementById('u362');

u362.style.cursor = 'pointer';
if (bIE) u362.attachEvent("onclick", Clicku362);
else u362.addEventListener("click", Clicku362, true);
function Clicku362(e)
{

if (true) {

	self.location.href="用车管理.html" + GetQuerystring();

}

}

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u447 = document.getElementById('u447');

var u333 = document.getElementById('u333');

var u522 = document.getElementById('u522');

u522.style.cursor = 'pointer';
if (bIE) u522.attachEvent("onclick", Clicku522);
else u522.addEventListener("click", Clicku522, true);
function Clicku522(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('01'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u209 = document.getElementById('u209');

var u263 = document.getElementById('u263');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u451 = document.getElementById('u451');

var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'center';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u523 = document.getElementById('u523');
gv_vAlignTable['u523'] = 'center';
var u514 = document.getElementById('u514');

u514.style.cursor = 'pointer';
if (bIE) u514.attachEvent("onclick", Clicku514);
else u514.addEventListener("click", Clicku514, true);
function Clicku514(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('28'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u377 = document.getElementById('u377');

u377.style.cursor = 'pointer';
if (bIE) u377.attachEvent("onclick", Clicku377);
else u377.addEventListener("click", Clicku377, true);
function Clicku377(e)
{

if (true) {

	SetPanelVisibilityu390("");

}

}

var u606 = document.getElementById('u606');
gv_vAlignTable['u606'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u317 = document.getElementById('u317');

var u139 = document.getElementById('u139');

var u593 = document.getElementById('u593');

u593.style.cursor = 'pointer';
if (bIE) u593.attachEvent("onclick", Clicku593);
else u593.addEventListener("click", Clicku593, true);
function Clicku593(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('22'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u25 = document.getElementById('u25');

var u487 = document.getElementById('u487');
gv_vAlignTable['u487'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u525 = document.getElementById('u525');
gv_vAlignTable['u525'] = 'center';
var u179 = document.getElementById('u179');

var u185 = document.getElementById('u185');

var u335 = document.getElementById('u335');

var u57 = document.getElementById('u57');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u431 = document.getElementById('u431');

var u526 = document.getElementById('u526');
gv_vAlignTable['u526'] = 'top';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u97 = document.getElementById('u97');

var u516 = document.getElementById('u516');

u516.style.cursor = 'pointer';
if (bIE) u516.attachEvent("onclick", Clicku516);
else u516.addEventListener("click", Clicku516, true);
function Clicku516(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('29'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u190 = document.getElementById('u190');
gv_vAlignTable['u190'] = 'center';
var u353 = document.getElementById('u353');

var u37 = document.getElementById('u37');

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u348 = document.getElementById('u348');
gv_vAlignTable['u348'] = 'center';
var u253 = document.getElementById('u253');

var u407 = document.getElementById('u407');

var u618 = document.getElementById('u618');

u618.style.cursor = 'pointer';
if (bIE) u618.attachEvent("onclick", Clicku618);
else u618.addEventListener("click", Clicku618, true);
function Clicku618(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('31'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u19 = document.getElementById('u19');

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u153 = document.getElementById('u153');

var u633 = document.getElementById('u633');
gv_vAlignTable['u633'] = 'top';
var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u69 = document.getElementById('u69');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u582 = document.getElementById('u582');
gv_vAlignTable['u582'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'center';
var u376 = document.getElementById('u376');
gv_vAlignTable['u376'] = 'center';
var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u430 = document.getElementById('u430');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u167 = document.getElementById('u167');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u438 = document.getElementById('u438');

var u465 = document.getElementById('u465');
gv_vAlignTable['u465'] = 'center';
var u11 = document.getElementById('u11');

var u515 = document.getElementById('u515');
gv_vAlignTable['u515'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u356 = document.getElementById('u356');

var u43 = document.getElementById('u43');

var u502 = document.getElementById('u502');

u502.style.cursor = 'pointer';
if (bIE) u502.attachEvent("onclick", Clicku502);
else u502.addEventListener("click", Clicku502, true);
function Clicku502(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('22'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u75 = document.getElementById('u75');

var u554 = document.getElementById('u554');
gv_vAlignTable['u554'] = 'center';
var u83 = document.getElementById('u83');

var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'center';
var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'top';
var u604 = document.getElementById('u604');
gv_vAlignTable['u604'] = 'center';
var u520 = document.getElementById('u520');

u520.style.cursor = 'pointer';
if (bIE) u520.attachEvent("onclick", Clicku520);
else u520.addEventListener("click", Clicku520, true);
function Clicku520(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('31'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'top';
var u620 = document.getElementById('u620');

u620.style.cursor = 'pointer';
if (bIE) u620.attachEvent("onclick", Clicku620);
else u620.addEventListener("click", Clicku620, true);
function Clicku620(e)
{

if (true) {

	SetPanelVisibilityu450("hidden");

}

}
gv_vAlignTable['u620'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u568 = document.getElementById('u568');
gv_vAlignTable['u568'] = 'center';
var u311 = document.getElementById('u311');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u432 = document.getElementById('u432');

var u528 = document.getElementById('u528');
gv_vAlignTable['u528'] = 'top';
var u239 = document.getElementById('u239');

var u237 = document.getElementById('u237');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u512 = document.getElementById('u512');

u512.style.cursor = 'pointer';
if (bIE) u512.attachEvent("onclick", Clicku512);
else u512.addEventListener("click", Clicku512, true);
function Clicku512(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('27'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'center';
var u623 = document.getElementById('u623');
gv_vAlignTable['u623'] = 'top';
var u490 = document.getElementById('u490');

u490.style.cursor = 'pointer';
if (bIE) u490.attachEvent("onclick", Clicku490);
else u490.addEventListener("click", Clicku490, true);
function Clicku490(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('16'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u434 = document.getElementById('u434');
gv_vAlignTable['u434'] = 'top';
var u519 = document.getElementById('u519');
gv_vAlignTable['u519'] = 'center';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'center';
var u464 = document.getElementById('u464');

u464.style.cursor = 'pointer';
if (bIE) u464.attachEvent("onclick", Clicku464);
else u464.addEventListener("click", Clicku464, true);
function Clicku464(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('03'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'top';
var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u624 = document.getElementById('u624');

var u610 = document.getElementById('u610');
gv_vAlignTable['u610'] = 'center';
var u616 = document.getElementById('u616');
gv_vAlignTable['u616'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u347 = document.getElementById('u347');

var u195 = document.getElementById('u195');

var u436 = document.getElementById('u436');
gv_vAlignTable['u436'] = 'top';
var u625 = document.getElementById('u625');
gv_vAlignTable['u625'] = 'top';
var u449 = document.getElementById('u449');

if (bIE) u449.attachEvent("onfocus", Focusu449);
else u449.addEventListener("focus", Focusu449, true);
function Focusu449(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables(''));

	SetPanelVisibilityu450("");

}

}

if (bIE) u449.attachEvent("onblur", LostFocusu449);
else u449.addEventListener("blur", LostFocusu449, true);
function LostFocusu449(e)
{

if (true) {

	SetPanelVisibilityu450("hidden");

}

}

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u23 = document.getElementById('u23');

var u553 = document.getElementById('u553');

u553.style.cursor = 'pointer';
if (bIE) u553.attachEvent("onclick", Clicku553);
else u553.addEventListener("click", Clicku553, true);
function Clicku553(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('02'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u221 = document.getElementById('u221');

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u499 = document.getElementById('u499');
gv_vAlignTable['u499'] = 'center';
var u61 = document.getElementById('u61');

var u147 = document.getElementById('u147');

var u293 = document.getElementById('u293');

var u370 = document.getElementById('u370');
gv_vAlignTable['u370'] = 'center';
var u283 = document.getElementById('u283');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u631 = document.getElementById('u631');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u151 = document.getElementById('u151');

var u117 = document.getElementById('u117');

var u378 = document.getElementById('u378');
gv_vAlignTable['u378'] = 'center';
var u21 = document.getElementById('u21');

var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'center';
var u201 = document.getElementById('u201');

var u468 = document.getElementById('u468');

u468.style.cursor = 'pointer';
if (bIE) u468.attachEvent("onclick", Clicku468);
else u468.addEventListener("click", Clicku468, true);
function Clicku468(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('05'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'center';
var u581 = document.getElementById('u581');

u581.style.cursor = 'pointer';
if (bIE) u581.attachEvent("onclick", Clicku581);
else u581.addEventListener("click", Clicku581, true);
function Clicku581(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('16'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u135 = document.getElementById('u135');

var u127 = document.getElementById('u127');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u419 = document.getElementById('u419');

var u325 = document.getElementById('u325');

var u463 = document.getElementById('u463');
gv_vAlignTable['u463'] = 'center';
var u589 = document.getElementById('u589');

u589.style.cursor = 'pointer';
if (bIE) u589.attachEvent("onclick", Clicku589);
else u589.addEventListener("click", Clicku589, true);
function Clicku589(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('20'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u6 = document.getElementById('u6');

var u397 = document.getElementById('u397');
gv_vAlignTable['u397'] = 'center';
var u460 = document.getElementById('u460');

u460.style.cursor = 'pointer';
if (bIE) u460.attachEvent("onclick", Clicku460);
else u460.addEventListener("click", Clicku460, true);
function Clicku460(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('2009 07 01'));

	SetPanelVisibilityu450("hidden");

}

}

var u171 = document.getElementById('u171');

var u524 = document.getElementById('u524');

u524.style.cursor = 'pointer';
if (bIE) u524.attachEvent("onclick", Clicku524);
else u524.addEventListener("click", Clicku524, true);
function Clicku524(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('02'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u552 = document.getElementById('u552');
gv_vAlignTable['u552'] = 'center';
var u207 = document.getElementById('u207');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'center';
var u501 = document.getElementById('u501');
gv_vAlignTable['u501'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'center';
var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u443 = document.getElementById('u443');

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'top';
var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u382 = document.getElementById('u382');
gv_vAlignTable['u382'] = 'top';
var u517 = document.getElementById('u517');
gv_vAlignTable['u517'] = 'center';
var u509 = document.getElementById('u509');
gv_vAlignTable['u509'] = 'center';
var u567 = document.getElementById('u567');

u567.style.cursor = 'pointer';
if (bIE) u567.attachEvent("onclick", Clicku567);
else u567.addEventListener("click", Clicku567, true);
function Clicku567(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('09'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u39 = document.getElementById('u39');

var u531 = document.getElementById('u531');
gv_vAlignTable['u531'] = 'top';
var u373 = document.getElementById('u373');

var u329 = document.getElementById('u329');

var u617 = document.getElementById('u617');
gv_vAlignTable['u617'] = 'top';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u632 = document.getElementById('u632');
gv_vAlignTable['u632'] = 'center';
var u532 = document.getElementById('u532');
gv_vAlignTable['u532'] = 'top';
var u558 = document.getElementById('u558');
gv_vAlignTable['u558'] = 'center';
var u165 = document.getElementById('u165');

var u462 = document.getElementById('u462');

u462.style.cursor = 'pointer';
if (bIE) u462.attachEvent("onclick", Clicku462);
else u462.addEventListener("click", Clicku462, true);
function Clicku462(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('2009 07 02'));

	SetPanelVisibilityu450("hidden");

}

}

var u533 = document.getElementById('u533');

u533.style.cursor = 'pointer';
if (bIE) u533.attachEvent("onclick", Clicku533);
else u533.addEventListener("click", Clicku533, true);
function Clicku533(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('03'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u269 = document.getElementById('u269');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u315 = document.getElementById('u315');

var u592 = document.getElementById('u592');
gv_vAlignTable['u592'] = 'center';
var u55 = document.getElementById('u55');

var u534 = document.getElementById('u534');
gv_vAlignTable['u534'] = 'center';
var u485 = document.getElementById('u485');
gv_vAlignTable['u485'] = 'center';
var u95 = document.getElementById('u95');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u535 = document.getElementById('u535');

u535.style.cursor = 'pointer';
if (bIE) u535.attachEvent("onclick", Clicku535);
else u535.addEventListener("click", Clicku535, true);
function Clicku535(e)
{

if (true) {

	SetPanelVisibilityu450("hidden");

}

}
gv_vAlignTable['u535'] = 'top';
var u337 = document.getElementById('u337');

var u477 = document.getElementById('u477');
gv_vAlignTable['u477'] = 'center';
var u304 = document.getElementById('u304');
gv_vAlignTable['u304'] = 'center';
var u145 = document.getElementById('u145');

var u442 = document.getElementById('u442');

var u351 = document.getElementById('u351');

var u475 = document.getElementById('u475');
gv_vAlignTable['u475'] = 'center';
var u498 = document.getElementById('u498');

u498.style.cursor = 'pointer';
if (bIE) u498.attachEvent("onclick", Clicku498);
else u498.addEventListener("click", Clicku498, true);
function Clicku498(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('20'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u527 = document.getElementById('u527');
gv_vAlignTable['u527'] = 'top';
var u359 = document.getElementById('u359');

var u375 = document.getElementById('u375');

var u105 = document.getElementById('u105');

var u566 = document.getElementById('u566');
gv_vAlignTable['u566'] = 'center';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u452 = document.getElementById('u452');
gv_vAlignTable['u452'] = 'center';
var u89 = document.getElementById('u89');

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u385 = document.getElementById('u385');

var u453 = document.getElementById('u453');

var u580 = document.getElementById('u580');
gv_vAlignTable['u580'] = 'center';
var u121 = document.getElementById('u121');

var u461 = document.getElementById('u461');
gv_vAlignTable['u461'] = 'center';
var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u291 = document.getElementById('u291');

var u395 = document.getElementById('u395');

var u441 = document.getElementById('u441');
gv_vAlignTable['u441'] = 'top';
var u588 = document.getElementById('u588');
gv_vAlignTable['u588'] = 'center';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u149 = document.getElementById('u149');

var u299 = document.getElementById('u299');

var u41 = document.getElementById('u41');

var u550 = document.getElementById('u550');
gv_vAlignTable['u550'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u45 = document.getElementById('u45');

var u73 = document.getElementById('u73');

var u303 = document.getElementById('u303');

var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u433 = document.getElementById('u433');

var u213 = document.getElementById('u213');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u500 = document.getElementById('u500');

u500.style.cursor = 'pointer';
if (bIE) u500.attachEvent("onclick", Clicku500);
else u500.addEventListener("click", Clicku500, true);
function Clicku500(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('21'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u224 = document.getElementById('u224');
gv_vAlignTable['u224'] = 'center';
var u393 = document.getElementById('u393');

var u565 = document.getElementById('u565');

u565.style.cursor = 'pointer';
if (bIE) u565.attachEvent("onclick", Clicku565);
else u565.addEventListener("click", Clicku565, true);
function Clicku565(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('08'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u572 = document.getElementById('u572');
gv_vAlignTable['u572'] = 'center';
var u233 = document.getElementById('u233');

var u371 = document.getElementById('u371');

u371.style.cursor = 'pointer';
if (bIE) u371.attachEvent("onclick", Clicku371);
else u371.addEventListener("click", Clicku371, true);
function Clicku371(e)
{

if (true) {

	self.location.href="信息管理-限行信息.html" + GetQuerystring();

}

}

var u219 = document.getElementById('u219');

var u615 = document.getElementById('u615');
gv_vAlignTable['u615'] = 'top';
var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'center';
var u389 = document.getElementById('u389');

u389.style.cursor = 'pointer';
if (bIE) u389.attachEvent("onclick", Clicku389);
else u389.addEventListener("click", Clicku389, true);
function Clicku389(e)
{

if (true) {

	SetPanelVisibilityu390("");

}

}

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u4 = document.getElementById('u4');

var u273 = document.getElementById('u273');

var u163 = document.getElementById('u163');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u486 = document.getElementById('u486');

u486.style.cursor = 'pointer';
if (bIE) u486.attachEvent("onclick", Clicku486);
else u486.addEventListener("click", Clicku486, true);
function Clicku486(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('14'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'center';
var u603 = document.getElementById('u603');

u603.style.cursor = 'pointer';
if (bIE) u603.attachEvent("onclick", Clicku603);
else u603.addEventListener("click", Clicku603, true);
function Clicku603(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('27'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u327 = document.getElementById('u327');

var u444 = document.getElementById('u444');
gv_vAlignTable['u444'] = 'top';
var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u484 = document.getElementById('u484');

u484.style.cursor = 'pointer';
if (bIE) u484.attachEvent("onclick", Clicku484);
else u484.addEventListener("click", Clicku484, true);
function Clicku484(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('13'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u508 = document.getElementById('u508');

u508.style.cursor = 'pointer';
if (bIE) u508.attachEvent("onclick", Clicku508);
else u508.addEventListener("click", Clicku508, true);
function Clicku508(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('25'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u621 = document.getElementById('u621');

u621.style.cursor = 'pointer';
if (bIE) u621.attachEvent("onclick", Clicku621);
else u621.addEventListener("click", Clicku621, true);
function Clicku621(e)
{

if (true) {

	var obj1 = document.getElementById("u450");
	if (obj1.style.visibility == "" || obj1.style.visibility == "visible") { SetPanelVisibilityu450("hidden"); }
	else {SetPanelVisibilityu450("");}

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u547 = document.getElementById('u547');

u547.style.cursor = 'pointer';
if (bIE) u547.attachEvent("onclick", Clicku547);
else u547.addEventListener("click", Clicku547, true);
function Clicku547(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('30'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u309 = document.getElementById('u309');

var u569 = document.getElementById('u569');

u569.style.cursor = 'pointer';
if (bIE) u569.attachEvent("onclick", Clicku569);
else u569.addEventListener("click", Clicku569, true);
function Clicku569(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('10'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u634 = document.getElementById('u634');
gv_vAlignTable['u634'] = 'top';
var u446 = document.getElementById('u446');

var u629 = document.getElementById('u629');
gv_vAlignTable['u629'] = 'center';
var u619 = document.getElementById('u619');
gv_vAlignTable['u619'] = 'center';
var u363 = document.getElementById('u363');
gv_vAlignTable['u363'] = 'top';
var u203 = document.getElementById('u203');

var u426 = document.getElementById('u426');
gv_vAlignTable['u426'] = 'top';
var u241 = document.getElementById('u241');

var u584 = document.getElementById('u584');
gv_vAlignTable['u584'] = 'center';
var u636 = document.getElementById('u636');
gv_vAlignTable['u636'] = 'center';
var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u627 = document.getElementById('u627');
gv_vAlignTable['u627'] = 'top';
var u361 = document.getElementById('u361');
gv_vAlignTable['u361'] = 'top';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u600 = document.getElementById('u600');
gv_vAlignTable['u600'] = 'center';
var u614 = document.getElementById('u614');
gv_vAlignTable['u614'] = 'top';
var u358 = document.getElementById('u358');

var u455 = document.getElementById('u455');

u455.style.cursor = 'pointer';
if (bIE) u455.attachEvent("onclick", Clicku455);
else u455.addEventListener("click", Clicku455, true);
function Clicku455(e)
{

if (true) {

	SetPanelStateu450("pd1u450");

}

}

var u173 = document.getElementById('u173');

var u398 = document.getElementById('u398');

var u577 = document.getElementById('u577');

u577.style.cursor = 'pointer';
if (bIE) u577.attachEvent("onclick", Clicku577);
else u577.addEventListener("click", Clicku577, true);
function Clicku577(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('14'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u115 = document.getElementById('u115');

var u35 = document.getElementById('u35');

var u587 = document.getElementById('u587');

u587.style.cursor = 'pointer';
if (bIE) u587.attachEvent("onclick", Clicku587);
else u587.addEventListener("click", Clicku587, true);
function Clicku587(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('19'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u81 = document.getElementById('u81');

var u285 = document.getElementById('u285');

var u422 = document.getElementById('u422');

u422.style.cursor = 'pointer';
if (bIE) u422.attachEvent("onclick", Clicku422);
else u422.addEventListener("click", Clicku422, true);
function Clicku422(e)
{

if (true) {

	SetPanelVisibilityu390("hidden");

}

}

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'top';
var u67 = document.getElementById('u67');

var u544 = document.getElementById('u544');
gv_vAlignTable['u544'] = 'center';
var u133 = document.getElementById('u133');

var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'center';
var u113 = document.getElementById('u113');

var u410 = document.getElementById('u410');

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u227 = document.getElementById('u227');

var u298 = document.getElementById('u298');
gv_vAlignTable['u298'] = 'center';
var u177 = document.getElementById('u177');

var u448 = document.getElementById('u448');
gv_vAlignTable['u448'] = 'top';
var u301 = document.getElementById('u301');

var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'center';
var u159 = document.getElementById('u159');

var u507 = document.getElementById('u507');
gv_vAlignTable['u507'] = 'center';
var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'center';
var u29 = document.getElementById('u29');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u29ann'), "<div id='u29Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u29', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u29').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u29based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u29base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u29based = document.getElementById('u29based');
            
InsertBeforeEnd(u29based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 点击跳转至保养信息,显示该车的保养记录,后同<BR><BR></div>");

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u425 = document.getElementById('u425');

u425.style.cursor = 'pointer';
if (bIE) u425.attachEvent("onclick", Clicku425);
else u425.addEventListener("click", Clicku425, true);
function Clicku425(e)
{

if (true) {

	SetPanelVisibilityu390("hidden");

}

}

var u563 = document.getElementById('u563');

u563.style.cursor = 'pointer';
if (bIE) u563.attachEvent("onclick", Clicku563);
else u563.addEventListener("click", Clicku563, true);
function Clicku563(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('07'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u635 = document.getElementById('u635');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u223 = document.getElementById('u223');

var u380 = document.getElementById('u380');

x = 0;
y = 0;
InsertAfterBegin(document.getElementById('u380ann'), "<div id='u380Note' class='annnoteimage' style='left:" + x + ";top:" + y + "' onclick=\"ToggleWorkflow(event, 'u380', 300, 300, false)\"></div>");

eval(annwindow.replace(/\[\[id\]\]/g, 'u380').replace(/\[\[label\]\]/g, "?"));

InsertAfterBegin(document.body, "<div id='u380based' style='z-index:1; visibility:hidden; position:absolute'></div><div id='u380base' style='z-index:1; visibility:hidden; position:absolute'></div>");
var u380based = document.getElementById('u380based');
            
InsertBeforeEnd(u380based, "<div class='anncontent'><span class='annfieldname'>Specification:</span> 字段数量不定,所以此查询面板高度不定<BR><BR></div>");

var u530 = document.getElementById('u530');
gv_vAlignTable['u530'] = 'top';
var u548 = document.getElementById('u548');
gv_vAlignTable['u548'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u17 = document.getElementById('u17');

var u267 = document.getElementById('u267');

var u161 = document.getElementById('u161');

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'top';
var u538 = document.getElementById('u538');

u538.style.cursor = 'pointer';
if (bIE) u538.attachEvent("onclick", Clicku538);
else u538.addEventListener("click", Clicku538, true);
function Clicku538(e)
{

if (true) {

	SetPanelStateu450("pd0u450");

}

}

var u405 = document.getElementById('u405');
gv_vAlignTable['u405'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u542 = document.getElementById('u542');
gv_vAlignTable['u542'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u53 = document.getElementById('u53');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u602 = document.getElementById('u602');
gv_vAlignTable['u602'] = 'center';
var u49 = document.getElementById('u49');

var u93 = document.getElementById('u93');

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u313 = document.getElementById('u313');

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u492 = document.getElementById('u492');

u492.style.cursor = 'pointer';
if (bIE) u492.attachEvent("onclick", Clicku492);
else u492.addEventListener("click", Clicku492, true);
function Clicku492(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('17'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u543 = document.getElementById('u543');

u543.style.cursor = 'pointer';
if (bIE) u543.attachEvent("onclick", Clicku543);
else u543.addEventListener("click", Clicku543, true);
function Clicku543(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('28'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u265 = document.getElementById('u265');

var u562 = document.getElementById('u562');
gv_vAlignTable['u562'] = 'center';
var u628 = document.getElementById('u628');

var u189 = document.getElementById('u189');

var u339 = document.getElementById('u339');

var u494 = document.getElementById('u494');

u494.style.cursor = 'pointer';
if (bIE) u494.attachEvent("onclick", Clicku494);
else u494.addEventListener("click", Clicku494, true);
function Clicku494(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('18'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u2 = document.getElementById('u2');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u409 = document.getElementById('u409');
gv_vAlignTable['u409'] = 'top';
var u513 = document.getElementById('u513');
gv_vAlignTable['u513'] = 'center';
var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u79 = document.getElementById('u79');

var u579 = document.getElementById('u579');

u579.style.cursor = 'pointer';
if (bIE) u579.attachEvent("onclick", Clicku579);
else u579.addEventListener("click", Clicku579, true);
function Clicku579(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('15'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'top';
var u626 = document.getElementById('u626');

var u243 = document.getElementById('u243');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u245 = document.getElementById('u245');

var u586 = document.getElementById('u586');
gv_vAlignTable['u586'] = 'center';
var u536 = document.getElementById('u536');

var u297 = document.getElementById('u297');

var u421 = document.getElementById('u421');

u421.style.cursor = 'pointer';
if (bIE) u421.attachEvent("onclick", Clicku421);
else u421.addEventListener("click", Clicku421, true);
function Clicku421(e)
{

if (true) {

	SetPanelVisibilityu390("hidden");

}

}

var u497 = document.getElementById('u497');
gv_vAlignTable['u497'] = 'center';
var u111 = document.getElementById('u111');

var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'center';
var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u591 = document.getElementById('u591');

u591.style.cursor = 'pointer';
if (bIE) u591.attachEvent("onclick", Clicku591);
else u591.addEventListener("click", Clicku591, true);
function Clicku591(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('21'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u183 = document.getElementById('u183');

var u472 = document.getElementById('u472');

u472.style.cursor = 'pointer';
if (bIE) u472.attachEvent("onclick", Clicku472);
else u472.addEventListener("click", Clicku472, true);
function Clicku472(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('07'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u429 = document.getElementById('u429');
gv_vAlignTable['u429'] = 'top';
var u599 = document.getElementById('u599');

u599.style.cursor = 'pointer';
if (bIE) u599.attachEvent("onclick", Clicku599);
else u599.addEventListener("click", Clicku599, true);
function Clicku599(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('25'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u71 = document.getElementById('u71');

var u557 = document.getElementById('u557');

u557.style.cursor = 'pointer';
if (bIE) u557.attachEvent("onclick", Clicku557);
else u557.addEventListener("click", Clicku557, true);
function Clicku557(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('04'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u396 = document.getElementById('u396');

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u319 = document.getElementById('u319');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u496 = document.getElementById('u496');

u496.style.cursor = 'pointer';
if (bIE) u496.attachEvent("onclick", Clicku496);
else u496.addEventListener("click", Clicku496, true);
function Clicku496(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('19'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u217 = document.getElementById('u217');

var u478 = document.getElementById('u478');

u478.style.cursor = 'pointer';
if (bIE) u478.attachEvent("onclick", Clicku478);
else u478.addEventListener("click", Clicku478, true);
function Clicku478(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('10'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'center';
var u15 = document.getElementById('u15');

var u155 = document.getElementById('u155');

var u511 = document.getElementById('u511');
gv_vAlignTable['u511'] = 'center';
var u249 = document.getElementById('u249');

var u235 = document.getElementById('u235');

var u47 = document.getElementById('u47');

var u392 = document.getElementById('u392');
gv_vAlignTable['u392'] = 'center';
var u413 = document.getElementById('u413');

var u287 = document.getElementById('u287');

var u87 = document.getElementById('u87');

var u605 = document.getElementById('u605');

u605.style.cursor = 'pointer';
if (bIE) u605.attachEvent("onclick", Clicku605);
else u605.addEventListener("click", Clicku605, true);
function Clicku605(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('28'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u91 = document.getElementById('u91');

var u7 = document.getElementById('u7');

var u560 = document.getElementById('u560');
gv_vAlignTable['u560'] = 'center';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u271 = document.getElementById('u271');

var u307 = document.getElementById('u307');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u601 = document.getElementById('u601');

u601.style.cursor = 'pointer';
if (bIE) u601.attachEvent("onclick", Clicku601);
else u601.addEventListener("click", Clicku601, true);
function Clicku601(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('26'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u597 = document.getElementById('u597');

u597.style.cursor = 'pointer';
if (bIE) u597.attachEvent("onclick", Clicku597);
else u597.addEventListener("click", Clicku597, true);
function Clicku597(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('24'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u141 = document.getElementById('u141');

var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u482 = document.getElementById('u482');

u482.style.cursor = 'pointer';
if (bIE) u482.attachEvent("onclick", Clicku482);
else u482.addEventListener("click", Clicku482, true);
function Clicku482(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('12'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u609 = document.getElementById('u609');

u609.style.cursor = 'pointer';
if (bIE) u609.attachEvent("onclick", Clicku609);
else u609.addEventListener("click", Clicku609, true);
function Clicku609(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('30'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u193 = document.getElementById('u193');

var u343 = document.getElementById('u343');

var u197 = document.getElementById('u197');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u457 = document.getElementById('u457');
gv_vAlignTable['u457'] = 'top';
var u437 = document.getElementById('u437');

var u575 = document.getElementById('u575');

u575.style.cursor = 'pointer';
if (bIE) u575.attachEvent("onclick", Clicku575);
else u575.addEventListener("click", Clicku575, true);
function Clicku575(e)
{

if (true) {

SetWidgetFormText('u449', PopulateVariables('13'));

;

;

	SetPanelVisibilityu450("hidden");

}

}

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
if (window.OnLoad) OnLoad();
