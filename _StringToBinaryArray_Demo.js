document.getElementsByTagName('title')[0].innerHTML = "0020c - string to binary array";

var body = document.getElementsByTagName('body')[0];
var print = function ( text ) {
	
	text = addHTMLWhitespaces( text );
	text = justifyText( text, 200 );

	body.innerHTML += text;
}
var println = function ( text ) {
	
	print( text + '</br>' );
}
String.prototype.format = function() {
	
	var result = this;
	
	for ( i = 0; i < arguments.length; i++ ) {
		
		var pattern = new RegExp("\\{" + i + "\\}", "g" );
		result = result.replace( pattern, arguments[i] );
	}
	
	return result;
}
var addHTMLWhitespaces = function ( text ) {
	
	var pattern = new RegExp(" ", "g" );
	return text.replace( pattern, '&nbsp;' );
}
var justifyText = function ( text, inlineChars ) {
	
	var result = "";
	
	for ( var i = 0, counter = 1; i < text.length; i++ ) {
		
		if ( counter == inlineChars ) {
			
			if ( text[ i ] == " " || text[ i ] == "&" && isWhiteSpaceCode( text, i ) ) {
				
				result += "</br>";
				counter = 1;
			}
		}
		else {
			counter++;
		}
		result += text[ i ];
	}

	return result;
}
var isWhiteSpaceCode = function ( text, index ) {
	
	var result = true;
	
	var code = "&nbsp;";
	if ( ( index + code.length ) <= text.length ) {
		
		for ( var i = 0; result && i < code.length; )
			if ( text[ index++ ] != code[ i++ ] )
				result = false;
	}

	return result;
}
var run = function () {

	var text = "hello world!";
	
	println( "stringToBinaryArray \"{0}\" =>   {1}"
		.format( text, stringToBinaryArray( text ).join("") ) );
}

var numberToBinaryArray = function ( number ) {
	
	var result = [ ];
	
	while ( number > 0 ) {
		
		var bit = Math.floor( number % 2 ) != 0 ? 1 : 0;
		result.unshift( bit ); // push element to the beginning of array
		
		number = Math.floor( number / 2 );
	}
	
	while( result.length != 8 )
		result.unshift( 0 );
	
	return result;
}

var stringToBinaryArray = function ( text ) {
	
	var result = [ ];
	
	for ( var i = 0; i < text.length; i++ ) {
		
		var binaryArr = numberToBinaryArray( text.charCodeAt( i ) );
		result = result.concat( binaryArr );
	}
	
	return result;
} 
 
run();

























