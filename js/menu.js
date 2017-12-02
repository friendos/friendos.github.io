function toggleMenu() {
	var nav = document.getElementById('nav');
	if(nav.style.display == 'none') nav.style.display = 'flex';
	else nav.style.display = 'none';
}
function showModal(option) {
	var modal = document.getElementById('modal');
	if(option == 'show') {
		modal.style.display = "block";
	} else {
		modal.style.display = "none";
	}
}