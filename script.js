const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes =[
    "Весь мир вокруг менялся, но дружба оставлась вечной!",
    "Тебе решать что будет дальше",
    "Упасть и встать - это часть контракта на жизнь",
    "К себе нежно",
    "У каждого свой Эверест",
    "Брать, давать ми наслаждаться",
    "Женщина, у которой есть план",
    "ХОЧУ -  МОГУ - НАДО",
    "Разреши себе чувствовать",
    "Гуляй, шальная императрица",
    "Мне уже все можно",
    "Имеешь право все послать",
    "На часах сегодня, самое время для Любви",
    "Я счастлив  по умолчанию! Пожалуйста не лезьте в настройки!",
    "Я все МОГУ!",
    "Время жить, как я хочу!",
    "Не усложняй!",
    "Глупости -это важно!", 
    "Счастье не за горами ",
    "Неважно, куда дует ветер. Тебе подвластны паруса!",
    "Помечтай для себя!"
]

button.addEventListener("click", function (){
   let randomeQuotes = quotes[Math.floor(Math.random()*quotes.length)];
   par.textContent=randomeQuotes;
   par.style.display = "block";
}) 

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight":false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable":true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  

    
