var xhtmlns = 'http://www.w3.org/1999/xhtml';

console.log('panel.js');
chrome.runtime.onConnect.addListener(function(port) {
	console.log(port);
	console.assert(port.name == "rdfa-inspector");
	console.log('ask parse-request');
	port.postMessage({type:'parse-request'});
	port.onMessage.addListener(function(msg) {
		console.log(msg);
		if(msg.type==='parse-response'){
			console.log('parse-response');
			console.log(msg);
			var rs_tbody = document.getElementById('triples-body');
			while(rs_tbody.firstChild) rs_tbody.removeChild(rs_tbody.firstChild);
			msg.table.forEach(function(item){
				var rs_tr = document.createElementNS(xhtmlns, 'tr');
				// subject
				var rs_td = document.createElementNS(xhtmlns, 'td');
				rs_td.textContent = item.subject.toString();
				rs_tr.appendChild(rs_td);
				// predicate
				var rs_td = document.createElementNS(xhtmlns, 'td');
				rs_td.textContent = item.predicate.toString();
				rs_tr.appendChild(rs_td);
				// object
				var rs_td = document.createElementNS(xhtmlns, 'td');
				rs_td.textContent = item.object.toString();
				rs_tr.appendChild(rs_td);
				// triple
				rs_tbody.appendChild(rs_tr);
			});

		}
	});
});
