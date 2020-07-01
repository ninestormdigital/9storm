var animation = bodymovin.loadAnimation({
  container: document.getElementById('.ghost'), // Required
  path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/ghost/ghost.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
})