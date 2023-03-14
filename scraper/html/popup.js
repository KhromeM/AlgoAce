const firebaseConfig = {
	apiKey: "AIzaSyBSfZTopcGu62oQc-iY7bhX7Tv_DWxafJY",
	authDomain: "algoace.firebaseapp.com",
	projectId: "algoace",
	storageBucket: "algoace.appspot.com",
	messagingSenderId: "159303088682",
	appId: "1:159303088682:web:6c46b1f7ef4701222ee153",
	measurementId: "G-M9PMFCVSDY",
};
firebaseConfig.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const login = () => {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			const h = document.createElement("h1");
			const t = document.createTextNode("YOURE NOW LOGGED IN!");
			h.appendChild(t);
		})
		.catch((error) => {
			// Handle errors here.
		});
};
