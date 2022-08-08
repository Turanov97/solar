let swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

$(function () {
  /* menu nav bar */
  $("#nav__toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".mobile_menu").toggleClass("active");
    // $("#mobile").toggleClass("active");
    // $(".overlay").addClass("active");
    // $("body").css("overflow", "hidden");
  });
});

// Accordion

function openTab(evt, tabName) {
  // Declare all variables
  let i, tabcontent, tablinks, tablinks__radius1, tablinks__sircle;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");

  tabcontent_sol_3 = document.getElementsByClassName("tabcontent_sol_3");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

(function ($, document) {
  // get tallest tab__content element
  let height = -1;

  $(".tab__content").each(function () {
    height = height > $(this).outerHeight() ? height : $(this).outerHeight();
    $(this).css("position", "absolute");
  });

  // set height of tabs + top offset
  $("[data-tabs]").css("min-height", height + 5 + "px");
})(jQuery, document);



function openTabNew(evt, tabName) {
  // Declare all variables
  let i, tabcontent_sol_3, tablinks, tablinks__radius1, tablinks__sircle;

  // Get all elements with class="tabcontent" and hide them
  
  tabcontent_sol_3 = document.getElementsByClassName("tabcontent_sol_3");

  for (i = 0; i < tabcontent_sol_3.length; i++) {
    tabcontent_sol_3[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

(function ($, document) {
  // get tallest tab__content element
  let height = -1;

  $(".tab__content").each(function () {
    height = height > $(this).outerHeight() ? height : $(this).outerHeight();
    $(this).css("position", "absolute");
  });

  // set height of tabs + top offset
  $("[data-tabs]").css("min-height", height + 5 + "px");
})(jQuery, document);

////////////////////////////////////////////////////

//slider2

////////////////////////////////////

const $drowdownArrow = document.querySelector(".fa-angle-down");
const $checkbox = document.getElementById("openDropdown");
const $dropdownMenu = document.querySelector(".dropdown-menu");

if ($checkbox !== null) {
  $checkbox.addEventListener("change", () => {
    $drowdownArrow.classList.toggle("rotate-dropdown-arrow");
  });
} 

if ($dropdownMenu !== null ) {
  $dropdownMenu.addEventListener("click", (e) => {
    $checkbox.checked = false;
    // setting checked to false won't trigger 'change'
    // event, manually dispatch an event to rotate
    // dropdown arrow icon
    $checkbox.dispatchEvent(new Event("change"));
  });

} 


$(document).ready(function () {
  $(".collapse.in").prev(".panel-heading").addClass("active");
  $("#accordion, #bs-collapse")
    .on("show.bs.collapse", function (a) {
      $(a.target).prev(".panel-heading").addClass("active");
    })
    .on("hide.bs.collapse", function (a) {
      $(a.target).prev(".panel-heading").removeClass("active");
    });
});

/* modal window */
let modalWindow = document.getElementById("myModal");

let modalBtn = document.getElementById("myBtn");

let modalSpan = document.getElementsByClassName("close")[0];


modalBtn.onclick = function () {
  modalWindow.style.display = "block";
};

modalSpan.onclick = function () {
  modalWindow.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
};


/* chart  */


let ctx = document.getElementById("myChart");
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Янв..", "Фев..", "Март", "Апр..", "Май", "Июнь", "Июль", "Авгу..", "Сент..", "Октя..",  "Ноя..", "Дека..",],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 5, 3, 5, 4, 5,2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
                  {
            label: '# of Dilli',
            data: [22, 29, 13, 15, 12, 13, 6, 9, 12, 12, 12, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
                  ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});



function openSliderTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("slider_tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("slider_tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "grid";
  evt.currentTarget.className += " active";
}