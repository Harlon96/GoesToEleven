// You can code JavaScript here

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "This is one of the many beautiful places I have traveled to";
    speechSynthesis.speak(voice);
}
