const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function gotolink(link) {
  console.log(link.value);
  location.href = 'https://forms.gle/M3oKv6Wd7Zc6VLfF9';
}

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 2;
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    speak("Good morning sir...");
  } else if (hour >= 12 && hour <= 17) {
    speak("Good afternoon sir...");
  } else {
    speak("Good evening sir...");
  }
}

window.addEventListener('load', () => {
  speak("Welcome to Calvin, your voice assistant!");
  wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
  content.textContent = "Listening...";
  recognition.start();
});

function takeCommand(message) {
  if (message.includes('hey') || message.includes('hello')) {
    const finalvoiceofcalvin = "Hello sir, how may I help you?";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('google.com')) {
    window.open("https://www.google.com/", "_blank");
    const finalvoiceofcalvin = "Opening Google";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('youtube.com')) {
    window.open("https://youtube.com", "_blank");
    const finalvoiceofcalvin = "Opening YouTube";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('amazon.com')) {
    window.open("https://amazon.com", "_blank");
    const finalvoiceofcalvin = "Opening Amazon";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('flipkart.com')) {
    window.open("https://flipkart.com", "_blank");
    const finalvoiceofcalvin = "Opening Flipkart";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('open cardekho.com')) {
    window.open("https://cardekho.com", "_blank");
    const finalvoiceofcalvin = "Opening CarDekho";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes("where do you live")) {
    const finalvoiceofcalvin = "I live in your heart";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes("what's your name")) {
    const finalvoiceofcalvin = "My name is Calvin";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes("who made you")) {
    const finalvoiceofcalvin = "My owner name is Soumen Maity";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
    window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
    const finalvoiceofcalvin = "This is what I found on the internet for you: " + message;
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('wikipedia')) {
    const topic = message.replace("wikipedia", "").trim();
    window.open(`https://en.wikipedia.org/wiki/${topic}`, "_blank");
    const finalvoiceofcalvin = "This is what I found on Wikipedia for " + topic;
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('time')) {
    const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
    const finalvoiceofcalvin = "The time is " + time;
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('date')) {
    const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric" });
    const finalvoiceofcalvin = "Today's date is " + date;
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('open spotify')) {
    window.open('https://open.spotify.com/', "_blank");
    const finalvoiceofcalvin = "Sure, opening Spotify";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('calendar')) {
    window.open('https://www.timeanddate.com/calendar/', "_blank");
    const finalvoiceofcalvin = "Opening calendar";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('calculator')) {
    window.open('https://www.calculator.net/', "_blank");
    const finalvoiceofcalvin = "Opening calculator";
    speak(finalvoiceofcalvin);
  }
  else if (message.includes('thank you')) { // fixed typo: include → includes
    const finalvoiceofcalvin = "You're welcome! I'm glad to help.";
    speak(finalvoiceofcalvin);
  }
  else {
    window.open(`https://www.google.com/search?q=${message.replace(/ /g, "+")}`, "_blank");
    const finalvoiceofcalvin = "Here is what I found for " + message + " on Google";
    speak(finalvoiceofcalvin);
  }
}
