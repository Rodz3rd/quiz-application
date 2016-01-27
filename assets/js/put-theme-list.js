// put theme list
var themes = ['black-tie', 'blitzer', 'cupertino', 'dark-hive', 'dot-luv', 'eggplant',
			  'excite-bike', 'flick', 'hot-sneaks', 'humanity', 'le-frog', 'mint-choc',
			  'overcast', 'pepper-grinder', 'redmond', 'smoothness', 'south-street',
			  'start', 'sunny', 'swanky-purse', 'trontastic', 'ui-darkness', 'ui-lightness',
			  'vader'];
str = "";
for ( i = 0; i < themes.length; i++ ) {
	str += "<option>"+themes[i]+"</option>";
}
$('#themes').html(str);