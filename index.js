function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

// -------------

function logShout(string) {
  console.log("hello".toUpperCase());
}

// -------------

function logWhisper(string) {
  console.log("HELLO".toLowerCase());
}

// -----------

function sayHiToHeadphonedRoommate(string) {

    if(string === string.toLowerCase()){
        console.log("I can't hear you!")
        return "I can't hear you!"
    }
    if(string === string.toUpperCase()){
        console.log("YES INDEED!")
        return "YES INDEED!"
    }
     if(string === "Let's have dinner together!"){
        console.log("I would love to!")
        return "I would love to!"
    }
    
}

sayHiToHeadphonedRoommate("Let's have dinner together!");