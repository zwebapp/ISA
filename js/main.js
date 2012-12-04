var meny = Meny.create({

  // The element that will be animated in from off screen
  menuElement: document.querySelector( 'header' ),

  // The contents that gets pushed aside while Meny is active
  contentsElement: document.querySelector( '#main' ),

  // The alignment of the menu (top/right/bottom/left)
  position: 'left',

  // The height of the menu (when using top/bottom position)
  height: 250,

  // The width of the menu (when using left/right position)
  width: 260

});

$('.operations').find('a').tooltip();

$('.input-prepend').find('input, textarea').tooltip({
	'trigger' : 'focus'
});

/**
 * Functions for the ISA scripts
 * @return {[type]} [description]
 */
$(function(){

	var site = new SiteFunctions();

	$('#submit-form').click(function(){

		site.DomainName = $('#website').val();
		site.Keywords = $('#keywords').val();

		$.noty.closeAll();
		
		var isError = site.ValidateFirst();

		if(isError){

			noty({
				text 		: isError,
				type 		: 'warning',
				layout 	: 'topCenter'
			});

			return false;
		}

		$('#keywords-result').text(site.GetKeywords());

		$('#title').text(site.GetDomainName());

		site.ResetFields();
		
	}); 

	$('.operations').children('.btn-group').children('a').click(function(){

		var resultText = site.TransformKeywords($(this), site.GetKeywords());
		
		site.ResetFields();
				
		$(this).addClass('btn-success').children().addClass('icon-white');
		
		$('#keywords-result').text(resultText);

	});

});

var SiteFunctions = function() { 

	this.Keywords = '';
	this.DomainName = '';

}

SiteFunctions.prototype = {

	ValidateFirst : function(){
		var invalidInput 			= '';
		var noDomainMessage 	= '<p><strong>Website</strong> field is empty, try again.</p>';
		var noKeywordsMessage = '<p><strong>No Keywords</strong>? That\'s important man.</p>';
		var noBothMessage 		= '<p><strong>Website</strong> and <strong>Keywords</strong> fields are empty!</p><p> You don\'t want to receive an unsual result <br/> <strong>AREN\'T YAH</strong>?</p>';

		if(this.Keywords && this.DomainName) return false;
		
		if(!this.DomainName && !this.Keywords) return noBothMessage;

		if(!this.DomainName && this.Keywords) return noDomainMessage;

		return noKeywordsMessage;
	},

	ResetFields : function(){

		$('.operations').css({display : 'inline-block'})
										.find('a').removeClass('active').removeClass('btn-success')
										.find('i').removeClass('icon-white');

		// If copy button is already initiated before.
		// 
		if($('section.span8 .input-append').find('button').size() > 0 ) {

			$('section.span8 .input-append').find('button').removeClass('btn-success').text('Copy');

			return;

		}

		// If no Copy button found.
		// 
		$('section.span8 .input-append').append($('<button class="btn" id="copy-title" type="button">Copy</button>'));

		// Call ZClipThis
		// 
		this._ZClipThis($('section.span8 .input-append button'));
	},

	GetDomainName : function(){

		var keywords = this.Keywords.split(/\n/);

		var str = keywords[0] + (keywords[1] ? ' | ' + keywords[1] : '');
		
		str = this._StringToCapitalize(str);

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

		  texts += i != 0 ? ',' : '';

		  texts += $.trim(items[i]);

		}

		return texts;
	},

	TransformKeywords : function($ele, keywords){

		if($ele.hasClass('to-upper')){
			return this._StringToUpperCase(keywords);
		}

		if($ele.hasClass('to-lower')){
			return this._StringToLowerCase(keywords);
		}

		// If return-default button is pressed
		return this.GetKeywords();

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


	_StringToCapitalize : function(str){

		return str.toLowerCase().replace(/\b[a-z]/g, function(letter){
				return letter.toUpperCase();
		});

	},

	_StringToLowerCase : function(str){
		return str.toLowerCase();
	},

	_StringToUpperCase : function(str){
		return str.toUpperCase();
	}

}
