    let link = document.getElementsByTagName("a");

    const changeColor(normalColor) {
      for (let i = 0; i < link.length; i++) {
         if (link[i].href) {
            link[i].style.color = normalColor;
         }
      }
    }

    link.onClick = changeColor('blue');
