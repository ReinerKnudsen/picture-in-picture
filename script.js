/* 	Helpful ressources for this exercise:
		https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/
		https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
*/
const button = document.getElementById('button');
const videoElement = document.getElementById('video');

// Prompt to select a media stream, pass to video element, then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		}
	} catch (error) {
		console.log('Fehler beim Laden des Media Stream: ', error)
	}
}

button.addEventListener('click', async () => {
	// Disable button
	button.disabled = true;
	// Wait for video to load PiP
	await videoElement.requestPictureInPicture();
	// Enable button
	button.disabled = false;
});

selectMediaStream();