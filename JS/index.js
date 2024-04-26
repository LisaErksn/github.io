const videoVisible = document.querySelector('.videos-visible')

window.addEventListener('keydown', (e)=> {
    if (e.key === 'Escape') {
        console.log("Hola Escape")
        videoVisible.classList.remove("videos-visible");

    }
  });

//   const videoPopups = document.querySelectorAll('.videos-visible')
//   videoPopups.forEach( element => {

//       window.addEventListener('keydown', (e)=> {
//           if (e.key === 'Escape' && element.style.visibility !== 'hidden') {
//               element.classList.remove("videos-visible");
//           }
//         });

//   })


// ---------Animation logo--------
function animateLogo(){
    const logo = document.querySelector('.banniere-logo')
    const span = document.querySelector('.span-logo')
    window.addEventListener('load', ()=> {
        console.log('load de la page')
        span.classList.add('span-logo-bounce')
        logo.classList.add('banniere-logo-translate')
        setTimeout( ()=>{span.classList.remove('span-logo-bounce')},2000)
        setTimeout( ()=>{logo.classList.remove('banniere-logo-translate')},2000)
    }) ;
}
animateLogo()

//-------Apparition navbar-------

function apparitionNavbar(){
    const navBtn = document.getElementById("nav-btn")
    const btnNav = document.querySelector('.nav-brand')
    const navList = document.querySelector('.navbar-links')

    navBtn.addEventListener('click', () =>{
        console.log("hello")
        navList.classList.toggle('navbar-collapse')
    })
}
apparitionNavbar()



//-------Bouton bannière-------

function banniereBtn(){
    const btnBanniere = document.querySelector('.banniere-btn')
    btnBanniere.addEventListener('click', ()=>{
        const prestations = document.querySelector('.presta-container')
        window.scrollTo({
            top: prestations.offsetTop,
            behavior: "smooth",
          });
    })
}
banniereBtn()


//-------Opacity image-------

function opacityVideo(){
    const videoContainer = document.querySelectorAll('.videos-container')
    videoContainer.forEach(element => {
        element.addEventListener('mouseenter', (e)=>{
            const videoOpacity= e.currentTarget.firstElementChild
            const videoText= videoOpacity.firstElementChild
            const videoLink= videoText.firstElementChild
            videoOpacity.classList.add('videos-opacity-visible')
            videoText.classList.add('text-transform')
            videoLink.classList.add('a-transform')
        })
        element.addEventListener('mouseleave', (e)=>{
            const videoOpacity= e.currentTarget.firstElementChild
            const videoText= videoOpacity.firstElementChild
            const videoLink= videoText.firstElementChild
            videoOpacity.classList.remove('videos-opacity-visible')
            videoText.classList.remove('text-transform')
            videoLink.classList.remove('a-transform')
        })
    })

}
opacityVideo()


//-------Apparition vidéo-------


function popupOpen(){
    const videoLink = document.querySelectorAll('.popup-link')    
    videoLink.forEach(e =>{
        e.addEventListener('click', (e)=>{
            console.log("hello popup video")
            const divParent = e.currentTarget.parentElement.parentElement
            const videoPopup = divParent.nextElementSibling
            videoPopup.style.transform = 'translateY(100px)'
            videoPopup.style.opacity = "1"
            videoPopup.classList.add('videos-visible')
            window.addEventListener('keydown', (e)=> {
                if (e.key === 'Escape') {
                    console.log("Hola Escape")
                    videoPopup.style.transform = 'translateY(-60px)'
                    videoPopup.classList.remove("videos-visible");
                    videoPopup.style.opacity = "0"
                }
            })
        })
    })
}
popupOpen()


//-------Disparition vidéo-------
function popupClose(){
    const btnClose = document.querySelectorAll('.popup-close1')
    btnClose.forEach( e => {
        e.addEventListener('click', (e)=>{
            const videoPopup = e.currentTarget.parentElement.parentElement
            videoPopup.style.transform = 'translateY(-60px)'
            videoPopup.classList.remove('videos-visible')
            videoPopup.style.opacity = "0"
        }) 
    })
}
popupClose()
