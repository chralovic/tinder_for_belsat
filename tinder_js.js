
/* пераход ад правілаў да першага профіля*/
function startGame() {
	document.querySelector('.rules').classList.add('invisible');
	document.querySelector('#nr1').classList.remove('invisible');
}

document.querySelector(".main-container__button").addEventListener('click', startGame);


const likedProfiles = [];

for (let i=1; i<4; i++) {
	function like() {
	document.querySelector('#nr' + i ).classList.add('invisible');
	document.querySelector('#nr' + (1 + i)).classList.remove('invisible');
	const likedDiv = document.querySelector('#nr' + i);
	likedProfiles.push(likedDiv);
	return likedProfiles;	
	}
	document.querySelector(".like" + i).addEventListener( 'click', like );
}

for (let i=1; i<4; i++) {
	function dislike() {
	document.querySelector('#nr' + i ).classList.add('invisible');
	document.querySelector('#nr' + (1 + i)).classList.remove('invisible');
	}
	document.querySelector(".dislike" + i).addEventListener( 'click', dislike );
}


function cleanProfiles(){
	document.querySelector('#nr4').classList.add('invisible');
	document.querySelector('#finalMatch').classList.remove('invisible');
}

document.querySelector(".dislike4").addEventListener( 'click', cleanProfiles );
document.querySelector(".like4").addEventListener( 'click', cleanProfiles );


function randomProfile() {
	document.querySelector('#finalMatch').classList.add('invisible');
	let numberMatches = likedProfiles.length;
	let i = Math.floor(Math.random() * numberMatches);
	console.log( likedProfiles[i] );
	
}

document.querySelector("#finalMatchButton").addEventListener( 'click', randomProfile );

/*
1) Гэтая хуйня паказвае рандомны профіль з усіх профіляў, а не з табліцы: document.querySelector('#nr'+ i).classList.remove('invisible'); 


2) не працуе клік на мабілцы і чамусьці на кампе таксама

3) трэба прыкруціць шэры

4) трэба навесці парадак з цссам
*/

