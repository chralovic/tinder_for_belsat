
/* пераход ад правілаў да першага профіля*/
function startGame() {
	document.querySelector('.rules').classList.add('invisible');
	document.querySelector('#nr1').classList.remove('invisible');
}

document.querySelector(".main-container__button").addEventListener('click', startGame);


const likedProfiles = [];

for (let i=1; i<3; i++) {
	function like() {
	document.querySelector('#nr' + i ).classList.add('invisible');
	document.querySelector('#nr' + (1 + i)).classList.remove('invisible');
	const likedDiv = document.querySelector('#nr' + i);
	likedProfiles.push(likedDiv);
	return likedProfiles;	
	}
	document.querySelector(".like" + i).addEventListener( 'click', like );
}

for (let i=1; i<3; i++) {
	function dislike() {
	document.querySelector('#nr' + i ).classList.add('invisible');
	document.querySelector('#nr' + (1 + i)).classList.remove('invisible');
	}
	document.querySelector(".dislike" + i).addEventListener( 'click', dislike );
}




function kotek() {
	let psotek = likedProfiles;
	console.log( psotek );
}

document.querySelector(".dislike3").addEventListener( 'click', kotek );


/*


function getElementsByClassName( strClassName, obj ) {
    if ( obj.className == strClassName ) {
        //insert this elm into array 
        array.push(obj);
    }  
}

let likedProfiles = [];
likedProfiles.prototype.push();

*/