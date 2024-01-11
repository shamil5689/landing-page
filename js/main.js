// window.addEventListener('DOMContentLoaded', function(){
//   document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
//     tabsBtn.addEventListener('click', function(event){
//       const path = event.currentTarget.dataset.path

//       document.querySelectorAll('.tab-content').forEach(function(tabContent){
//         tabContent.classList.remove('tab-content-active')
//       })
//       document.querySelector('[data-target="${path}"]')
//     })
//   })
// })

// window.addEventListener('DOMContentLoaded', function(){
//   document.querySelectorAll('.tabs__btn').forEach(function(tabContent){
//     tabContent.classList.remove('tab-content-active')
//   })
// })

// window.addEventListener('DOMContentLoaded', function(){
//   // document.body.contentEditable = true;
// })


window.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.swiper-container', {
    // loop: true,

    pagination: {
      el: '.swiper-pagination',
      //буллеты для переключения слайдов
      clickable: true,
      // чувствительность слайда
      touchRatio: 1,
      // угол срабатывания слайда
      touchAngle: 45,
      // переключение слайда при клике
      slideToClickedSlide: true,
      // количество слайдов для показа
      slidesPerviev: 3,
      //динамические буллеты
      dynamicBullets: true,
      // если слайдов меньше, чем нужно
      watchOverflow: true,
    },

  });
  document.querySelectorAll('.consultation__button').forEach(function(consulBtn){
    consulBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.consultation__left').forEach(function(consultLeft){
        consultLeft.classList.remove('consultation__left-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('consultation__left-active')
    })
  })
  document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('#menu').classList.toggle('is-active')
  })
})

$( function() {
  $( "#accordion1" ).accordion({
    heightStyle: 'content',
    active: 0,
    collapsible: true,
    animate: {
      duration: 600,
      easing: 'easeOutBounce'
    }
  })
})
