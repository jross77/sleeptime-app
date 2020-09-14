function zzzOnClick() {
    let output = document.querySelector('.output');
    output.style.display = 'block';
  
    let now = Date.now();
    let minute = 60 * 1000; // miliseconds
  
    let hours = document.getElementById('hours');
    hours.innerText = ""; // cleanup exisitng content
    now += 14 * minute; // fall sleep
    // compute sleep cycles
    for (let c = 1; c <= 6; c++) {
        now += 90 * minute;
        let cycle = new Date(now);
        let span = document.createElement("span");
        span.id = "cycle-" + c;
        span.innerText = cycle.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        hours.appendChild(span);
        if (c < 6) {
          let or = document.createTextNode(" or ");
          hours.appendChild(or);
        }
    }
  }

  function calcOnClick() {
    let output2 = document.querySelector('.output2');
    output2.style.display = 'block';
    let bedtime = 0;

  }
  function calc2OnClick() {
    let output3 = document.querySelector('.results');
    output3.style.display = 'block';
    let e = document.getElementById("hour");
    let hr=e.options[e.selectedIndex].text;
    let f = document.getElementById("minute");
    let min=f.options[e.selectedIndex].text;
    let g = document.getElementById("ampm");
    let amp=g.options[e.selectedIndex].text;
    let sleepTime = "";
    sleepTime+="If you fall asleep at ";
    sleepTime+=hr+":"+min+" "+amp;
    sleepTime+=", you should try to wake up at one of the following times: ";
    let bedtime=document.querySelector(".sleepTime");
    bedtime.innerText=sleepTime;
    calculate();
  }
    function calculate(){
      let e = document.getElementById("hour");
      let hr1=e.options[e.selectedIndex].text;
      let f = document.getElementById("minute");
      let min1=f.options[e.selectedIndex].text;
      let g = document.getElementById("ampm");
      let amp1=g.options[e.selectedIndex].text;
      hr1 = amp1 === "PM" ? hr1 + 12 : hr1;
      let now2 = new Date();
      now2.setHours(hr1);
      now2.setMinutes(min1);
      now2 = now2.valueOf();
    
    
      let minute = 60 * 1000; // miliseconds
    
      let hours2 = document.getElementById('hours2');
      hours2.innerText = ""; // cleanup exisitng content
      //now2 += 14 * minute; // fall sleep
    
      // compute sleep cycles
      for (let c = 1; c <= 6; c++) {
          now2 += 90 * minute;
          let cycle = new Date(now2);
          let span = document.createElement("span");
          span.id = "cycle-2" + c;
          span.innerText = cycle.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          hours2.appendChild(span);
          if (c < 6) {
            let or = document.createTextNode(" or ");
            hours2.appendChild(or);
          }
      }
    }


  
 