<?php
// echo "latestReceivedTweetId";
// echo $_GET['latestReceivedTweetId'];
$aTweets = [
  ["id" => 35, "title" => "AAA", "body" => "HI A"],
  ["id" => 38, "title" => "BBB", "body" => "HI B"],
  ["id" => 76, "title" => "CCC", "body" => "HI C"],
];

// Based on the array on top
// Based on the latestReceivedTweetId
// Send one tweet at a time NO array


// http_response_code(200);
header('Content-Type: application/json');
echo json_encode($aTweets);
