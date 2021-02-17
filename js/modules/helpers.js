
export function parseUrl(el){
	let link = document.createElement("a");
	link.href = el;
	return link ;
}

