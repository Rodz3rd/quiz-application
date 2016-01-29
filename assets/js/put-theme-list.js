// put theme list
var themes = ['black-tie', 'blitzer', 'cupertino', 'dark-hive', 'dot-luv', 'eggplant',
			  'excite-bike', 'flick', 'hot-sneaks', 'humanity', 'le-frog', 'mint-choc',
			  'overcast', 'pepper-grinder', 'redmond', 'smoothness', 'south-street',
			  'start', 'sunny', 'swanky-purse', 'trontastic', 'ui-darkness', 'ui-lightness',
			  'vader'];

for ( i = 0; i < themes.length; i++ ) {
	
	str = "<li>" + themes[i]
		+	  "<ul>"
		+	  	"<li><a href='#'>Try</a></li>"
		+	  	"<li><a href='#'>Save</a></li>"
		+ 	  "</ul>"
		+  "</li>";

	theme_no = (i % 3) + 1;

	$('#theme-list'+theme_no).append(str);

	// console.log(i+1);
}