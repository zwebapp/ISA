
var meny = Meny.create({

  // The element that will be animated in from off screen
  menuElement: document.querySelector( 'header' ),

  // The contents that gets pushed aside while Meny is active
  contentsElement: document.querySelector( '#main' ),

  // The alignment of the menu (top/right/bottom/left)
  position: 'top',

  // The height of the menu (when using top/bottom position)
  height: 200,

  // The width of the menu (when using left/right position)
  width: 260

})

/**
 * Functions for the ISA scripts
 * @return {[type]} [description]
 */
$(function(){

	var site = new SiteFunctions();

	$('#submit-form').click(function(){

		site.DomainName = $('#website').val();
		site.Keywords = $('#keywords').val();

		$('#keywords-result').text(site.GetKeywords());

		$('#title').text(site.GetDomainName());

		if($('section.span8 .input-append').find('button').size() > 0 ) return;

		$('section.span8 .input-append').append($('<button class="btn" id="copy-title" type="button">Copy</button>'));

		site._ZClipThis($('section.span8 .input-append button'))
		
	})

});

var SiteFunctions = function() { 

	this.Keywords = '';
	this.DomainName = '';

}

SiteFunctions.prototype = {

	GetDomainName : function(){

		var keywords = this.Keywords.split(/\n/);

		var str = keywords[0] + (keywords[1] ? ' | ' + keywords[1] : '');
		
		str = this._StringToUpperCase(str);

		return str + ' | ' + this.DomainName;

	},

	GetKeywords : function(){

		var items = this.Keywords.split(/\n/);
		var texts = '';

		for (var i=0; i < items.length; i++) {

		  // Do not push this line if it contains a whitespace character.
		  if (!/\S/.test(items[i])) continue;

		  if(i == items.length - 1) {
		  	texts += $.trim(items[i]);
		  	continue;
		  }

		  texts += $.trim(items[i]) + ',';

		}

		return texts;
	},

	_ZClipThis : function($ele){

		$ele.zclip({

				path: 'js/vendor/ZeroClipboard.swf',
				copy: function(){
					return $(this).prev().html();
				},
				afterCopy : function(){
					$(this).addClass('btn-success').text('Copied');
				}

			});
	},


	_StringToUpperCase : function(str){

		var stuc = str.toLowerCase().replace(/\b[a-z]/g, function(letter){
				return letter.toUpperCase();
		});

		return stuc;
	}

}
