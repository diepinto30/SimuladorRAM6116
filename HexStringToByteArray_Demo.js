document.getElementsByTagName('title')[0].innerHTML = "0026 - HexStringToByteArray_Demo";

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
Array.prototype.isIntegerArray = function() {
	
	var result = true;
	
	for ( var i = 0; i < this.length && result; i++ ) {
		
		if ( !Number.isInteger( this[i] ) )
			result = false;
	}
	
	return result;
}
Array.prototype.asStringBinary = function() {
	
	var result = [];
	
	if ( this.isIntegerArray() ) {
		
		for ( var i = 0; i < this.length; i++ ) {
			
			var str = this[ i ].toString( 2 );
			
			while ( str.length != 8 )
				str = "0" + str;			
			
			result.push( str );
		}
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

	var hexString = "FF-23-AD-A3";
	println( "Original String -> {0}".format( hexString ) );
	
	println( "" );
	
	var byteArrayV1 = hexStringToByteArrayV1( hexString );
	println( "V1 ByteArray - {0} base 10".format( byteArrayV1.join("-") ) );
	println( "V1 ByteArray - {0} binary".format( byteArrayV1.asStringBinary().join("-") ) );
	
	println( "" );
	
	var byteArrayV2 = hexStringToByteArrayV2( hexString );
	println( "V2 ByteArray - {0} base 10".format( byteArrayV2.join("-") ) );
	println( "V2 ByteArray - {0} binary".format( byteArrayV2.asStringBinary().join("-") ) );
	
}

var hexStringToByteArrayV1 = function ( hexStr ) {
	
	var result = [];
	
	var alphabet = "0123456789ABCDEF";
	
	hexStr = hexStr.replace( /-/g, ""); // remove "-" 
	if ( Math.floor( hexStr.length % 2 ) == 0 ) {
		
		for ( var i = 0; i < hexStr.length; i = i + 2 ) {
			
			var number = 0;
			
			var char1 = hexStr[ i ].toUpperCase();
			var index1 = alphabet.indexOf( char1 );
			
			var char2 = hexStr[ i + 1 ].toUpperCase();
			var index2 = alphabet.indexOf( char2 );
			
			number = number ^ index1; // ^ XOR operator
			number <<= 4; // shift to the left 4x
			number = number ^ index2;
			
			result.push( number );
		}
	}
	
	return result;
}

var hexStringToByteArrayV2 = function ( hexStr ) {

	var result = [];
	
	hexStr = hexStr.replace( /-/g, ""); // remove "-" 
	if ( Math.floor( hexStr.length % 2 ) == 0 ) {
		
		for ( var i = 0; i < hexStr.length; i = i + 2 ) {
			
			var hex = hexStr.substr( i, 2).toUpperCase();
			var number = parseInt( hex, 16 );
			
			result.push( number );
		}
	}
	
	return result;	
}

run();




















