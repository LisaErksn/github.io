const videoPopups = document.querySelectorAll('.videos-visible')
window.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        videoPopups.classList.remove("videos-visible");
    }
  });



  window.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        console.log("hello")
    }
  });