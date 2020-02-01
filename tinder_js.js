
/* пераход ад правілаў да першага профіля*/
function startGame() {
	document.querySelector('.rules').classList.add('invisible');
	document.querySelector('#nr1').classList.remove('invisible');
}

document.querySelector(".main-container__button").addEventListener('click', startGame);




for (let i=1; i<3; i++) {
	function invisibleProfile() {
	document.querySelector('#nr' + i ).classList.add('invisible');
	document.querySelector('#nr' + (1 + i)).classList.remove('invisible');
	}

	document.querySelector(".like" + i).addEventListener( 'click', invisibleProfile );
}




