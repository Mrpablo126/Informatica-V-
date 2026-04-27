let clicks = 0;
function sumarClick() {
	clicks++;
	let heading = document.querySelector('#contador');
    heading.innerHTML = clicks;
}
