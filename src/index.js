const menu = document.getElementById("menu")
        function toggle(){
            menu.classList.toggle("hidden");
        }

        const callback1 = function (entries) {
            entries.forEach((entry) => {
              console.log(entry);
          
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-slideUp");
              } else {
                entry.target.classList.remove("animate-slideUp");
              }
            });
          };
          
          const observer = new IntersectionObserver(callback1);
          
          const targets = document.querySelectorAll(".js-show-on-scroll");
          targets.forEach(function (target) {
            target.classList.add("opacity-100");
            observer.observe(target);
          });
          

          const callback2 = function (entries1) {
            entries1.forEach((entry1) => {
              console.log(entry1);
          
              if (entry1.isIntersecting) {
                entry1.target1.classList.add("animate-popUp");
              } else {
                entry1.target1.classList.remove("animate-popUp");
              }
            });
          };
          
          const observer2 = new IntersectionObserver(callback2);
          
          const targets2 = document.querySelectorAll(".js-show-on-scroll2");
          targets2.forEach(function (target1) {
            target1.classList.add("opacity-100");
            observer2.observe(target1);
          });
          

          
      