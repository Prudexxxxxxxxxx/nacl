function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Функция которая получает оptions
  let selected = document.querySelector('.selected')
    selected.onchange = function() {
        let selectInd = selected.selectedIndex;
        let options = selected.options;
        let mnp2 = options[selectInd].innerHTML
        console.log(mnp2);
        document.getElementById('mnp').innerHTML= mnp2
        document.getElementById('mnp2').innerHTML= mnp2
        
    }
 


    document.querySelector('.btn_danye').addEventListener('click',  () =>{
      let zayvka = document.getElementById('zayvka').value;
      document.getElementById('zayvka1').innerHTML= zayvka
      document.getElementById('zayvka2').innerHTML= zayvka

      let tel = document.getElementById('tel').value;
      document.getElementById('tel1').innerHTML= tel
     
      
      let data = document.getElementById('data').value;
      document.getElementById('data1').innerHTML= data
      document.getElementById('data2').innerHTML= data
  
    })
   

    area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    };
      area1.value = localStorage.getItem('area1');
      area1.oninput = () => {
        localStorage.setItem('area1', area1.value)
    };


