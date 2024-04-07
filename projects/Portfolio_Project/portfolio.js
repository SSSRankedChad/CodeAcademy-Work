    let link = document.getElementsByTagName("a");

    function changeColor(normalColor) {
      for (let i = 0; i < link.length; i++) {
         if (link[i].href) {
            link[i].style.color = hex;
         }
      }
    }

    changeColor('red');
