$('div.block').html($('div.block').html().replace('<td align="center">Nincs üzenet</td>', '<td align="center"><div class="nonemessage">Nincs üzenet</div></td>'));

$('input[type="checkbox"]').hide();

$('td[style="width:20%;white-space: nowrap;"]').css('color','#646464');


$('a[onclick="new_message(1);return false;"]').click();
$('a[onclick="new_message(1);return false;"]').attr('class','writenew');


$('.outputPM').css('paddingLeft','0px');
$('.inputPM').css('paddingLeft','0px');
$('.outputPM').css('marginBottom','10px');
$('.inputPM').css('marginBottom','10px');
$('td[style="white-space: nowrap;"]').css('color','#646464')

$('div[align="left"]').attr('class','big');


$('td[width="3%"]').html('<span class="r_round"><img src="https://cdn2.iconfinder.com/data/icons/social-buttons-2/512/email-32.png"></span>');

$('td[width="3%"]').each(function() {
 mTitle = $(this).parent().children('td').eq(1).children('a').eq(0).html();
 mLinkMessage = $(this).parent().children('td').eq(1).children('a').eq(0).attr('href');
 mAuthor = $(this).parent().children('td').eq(1).children('a').eq(1).text();
 mLinkAuthor = $(this).parent().children('td').eq(1).children('a').eq(1).attr('href');
 mDate = $(this).parent().children('td').eq(2).html();
 $(this).parent().children('td').eq(1).html('<div class="m_title"><a href="'+mLinkMessage+'">'+mTitle+'</a></div><div class="m_author"><a href="'+mLinkAuthor+'">'+mAuthor+'</a></div>')
$(this).html('<span class="r_round"><a href="'+mLinkAuthor+'"><img src="https://filin.mail.ru/pic?email='+mAuthor+'@'+mAuthor+'&trust=false&width=32&height=32&name='+mAuthor+'&version=4&build=4"></a></span>');
$(this).parent().children('td').eq(2).html('<div class="m_date">'+mDate+'</div>');
$(this).parent().attr('class','one_message')
});

$('td[width="90%"]').each(function() {
 mTitle = $(this).children('b').html();
 mAuthor = $(this).children('a').text();
 mLinkAuthor = $(this).children('a').attr('href');
 $(this).html('<div class="msin_t"><div class="msin_l"><span class="r_round"><a href="'+mLinkAuthor+'"><img src="https://filin.mail.ru/pic?email='+mAuthor+'@'+mAuthor+'&trust=false&width=32&height=32&name='+mAuthor+'&version=4&build=4"></a></span></div><div class="msin_r"><div class="m_title m_title2">'+mTitle+'</div><div class="m_author"><a href="'+mLinkAuthor+'">'+mAuthor+'</a></div></div></div>')
});

$('td[width="90%"]').parent().parent().parent().attr('style','padding:30px')

$('td[width="5%"]').parent().parent().parent().hide();

$('b.unread').parent().parent().parent().attr('class','newpm')

$('#eMessage').html('Új üzenet')
$('#eMessage').after('<div class="over_input_1" id="over_mas_inp1"><input size="30" id="mas_inp1" class="input_1" type="text" value="Címzett" onkeyup="setInput_k()" onfocus="setInput1_1()" onblur="setInput1_2();setInput_k()"></div><div class="over_input_1" id="over_mas_inp2"><input size="30" id="mas_inp2" class="input_1" type="text" value="Tárgy" onkeyup="setInput2_k()" onfocus="setInput2_1()" onblur="setInput2_2();setInput2_k()"></div><div class="over_input_1" id="over_mas_inp3"><textarea onkeyup="setInput3_k()" onfocus="setInput3_1()" onblur="setInput3_2();setInput3_k()" class="input_1" id="mas_inp3" rows="8"></textarea></div>')
$('input[value="Előnézet"]').attr('class','prosm');
$('input[type="reset"]').hide();
$('#addform').html($('#addform').html().replace('Címzett:', ''));
$('#addform').html($('#addform').html().replace('Tárgy:', ''));
$('input[name="subject"]').hide();

if($('input[name="subject"]').val().substring(0,2) == 'Re') {$('#over_mas_inp1').hide()}

if($('#PMtoUser').val() != '') {$('#mas_inp1').val($('#PMtoUser').val())}
if($('input[name="subject"]').val() != '') {$('#mas_inp2').val($('input[name="subject"]').val())}
function setInput_k() {$('#PMtoUser').val($('#mas_inp1').val())}

function setInput2_k() {$('input[name="subject"]').val($('#mas_inp2').val())}
function setInput3_k() {$('textarea[name="message"]').val($('#mas_inp3').val())}


function setInput1_1() {
if($('#mas_inp1').val() == 'Címzett') {$('#mas_inp1').val('');}
$('#over_mas_inp1').attr('class','over_input_2');}
function setInput1_2() {
if($('#mas_inp1').val() == '') {$('#mas_inp1').val('Címzett');}
$('#over_mas_inp1').attr('class','over_input_1');}

function setInput2_1() {
if($('#mas_inp2').val() == 'Tárgy') {$('#mas_inp2').val('');}
$('#over_mas_inp2').attr('class','over_input_2');}
function setInput2_2() {
if($('#mas_inp2').val() == '') {$('#mas_inp2').val('Tárgy');}
$('#over_mas_inp2').attr('class','over_input_1');}

function setInput3_1() {
$('#over_mas_inp3').attr('class','over_input_2');}
function setInput3_2() {
$('#over_mas_inp3').attr('class','over_input_1');}

$('.writenew').click();