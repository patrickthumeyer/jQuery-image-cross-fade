$(`.gallery-item`).hide();
$(`.gallery-item.active`).show();

setInterval(() => {
  let current = $(`.gallery-item.active`);
  let nextImg = current.next();
  if (nextImg.length === 0) {
    nextImg = $(`.gallery-item:first-child`);
  }
  current.removeClass(`active`).fadeOut(1000);
  nextImg.addClass(`active`).fadeIn(1000);
}, 2000);

// let slider = $(".gallery-item");
// let active = $(".active");
// slider.hide();
// active.show();
// setInterval(slideImg, 2000);
// function slideImg() {
//   var active = $(".active");
//   let nextImg = active.next();
//   console.log(nextImg.length);
//   if (nextImg.length == 0) {
//     nextImg = slider.first();
//     // nextImg.addClass("active");
//   }
//   active.fadeOut(1000);
//   nextImg.fadeIn(1000);
//   active.removeClass("active");
//   nextImg.addClass("active");
// }
