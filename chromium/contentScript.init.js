console.log('rdfa:');
var rdfa = require('rdfa');
window.librdfa = rdfa;
var result = rdfa.parse(document.location.toString(), document);
var ttl = result.outputGraph.toArray().join('\n');
console.log(ttl);

var port = chrome.runtime.connect({name: "rdfa-inspector"});
//console.log('send type:hello');
//port.postMessage({type:'hello'});
//port.postMessage({type:'response', table:result.outputGraph.toArray()});
port.onMessage.addListener(function(msg) {
	console.log('Have message', msg);
	if(msg.type==='parse-request'){
		var result = rdfa.parse(document.location.toString(), document);
		port.postMessage({type:'parse-response', table:result.outputGraph.toArray().map(function(row){
			return {
				subject: row.subject.toTurtle(),
				predicate: row.predicate.toTurtle(),
				object: row.object.toTurtle(),
			}
		})});
	}
});


