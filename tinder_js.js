
/* пераход ад правілаў да першага профіля */
function startGame() {
	document.querySelector('.rules').classList.add('invisible');
	document.querySelector('#nr1').classList.remove('invisible');
}
document.querySelector(".main-container__button").addEventListener('click', startGame);

/* табліца для палайкаваных профіляў */
const likedProfiles = [];

/* пятля для лайкання */
for (let i=1; i<10; i++) {
	function like() {
	document.querySelector('#nr' + i ).classList.add('invisible');
	document.querySelector('#nr' + (1 + i)).classList.remove('invisible');
	const likedDiv =  i;
	likedProfiles.push(likedDiv);
	return likedProfiles;	
	}
	document.querySelector(".like" + i).addEventListener( 'click', like );
}

/* паправіла свой касяк тут -- бо калі б не гэтая функцыя, то апошні профіль немагчыма было б дадаць у табліцу */

function like10() {
	const likedDiv = 10;
	likedProfiles.push(likedDiv);
	return likedProfiles;
}

document.querySelector(".like10").addEventListener( 'click', like10 );

/* пятля для дызлайкаў */

for (let i=1; i<10; i++) {
	function dislike() {
	document.querySelector('#nr' + i ).classList.add('invisible');
	document.querySelector('#nr' + (1 + i)).classList.remove('invisible');
	}
	document.querySelector(".dislike" + i).addEventListener( 'click', dislike );
}


/* гэтая функцыя хавае апошні профіль і замест яго паказывае тэксцік "ура вы ўсіх палайкалі даведайцеся хто вашая пара */
function cleanProfiles(){
	document.querySelector('#nr10').classList.add('invisible');
	document.querySelector('#finalMatch').classList.remove('invisible');
}

document.querySelector(".dislike10").addEventListener( 'click', cleanProfiles );
document.querySelector(".like10").addEventListener( 'click', cleanProfiles );

/* рандамайзер -- хавае тэксцік "ура вы ўсіх палайкалі" і паказывае на яго месцы рандомны профіль. хавае таксама кнопкі лайк-дызлайк */

function randomProfile() {
	document.querySelector('#finalMatch').classList.add('invisible');
	let numberMatches = likedProfiles.length;
	if (numberMatches === 0) {
		document.querySelector('#nr0').classList.remove('invisible');
	} else {
	let i = Math.floor(Math.random() * numberMatches);
	console.log( likedProfiles[i] );
	document.querySelector('#nr' + likedProfiles[i]).classList.remove('invisible');
	document.querySelector('.like' + likedProfiles[i] ).classList.add('invisible');
	document.querySelector('.dislike' + likedProfiles[i] ).classList.add('invisible');
	document.querySelector('.itsAMatch').classList.remove('invisible');
		document.querySelector('.shareButton').classList.remove('invisible');
		}
}


document.querySelector("#finalMatchButton").addEventListener( 'click', randomProfile );




/*

2) не працуе клік на мабілцы і чамусьці на кампе таксама

4) трэба навесці парадак з цссам
*/

