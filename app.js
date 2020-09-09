var latestReceivedTweetId = 0; // 47

setInterval(async function () {
	// let connection = await fetch('api-get-latest-tweets.php?latestReceivedTweetId='+latestReceivedTweetId)
	let connection = await fetch(`api-get-latest-tweets.php?latestReceivedTweetId=${latestReceivedTweetId}`);
	console.log(connection);
	if (connection.status != 200) {
		alert('Something is wrong in the system');
	}

	let sTweets = await connection.text();
	let aTweets = JSON.parse(sTweets); // PHP json_decode

	for (var i = 0; i < aTweets.length; i++) {
		latestReceivedTweetId = aTweets[i].id;
		var divTweet = `
    <div class="tweet" id="${aTweets[i].id}">
      <p>${aTweets[i].title}</p>
      <p>${aTweets[i].body}</p>
      <button>delete</button>
    </div>`;
		document.querySelector('#tweets').insertAdjacentHTML('afterbegin', divTweet);
	}
	console.log('latestReceivedTweetId', latestReceivedTweetId);
}, 2000);
