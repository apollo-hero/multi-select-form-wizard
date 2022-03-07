
const progress = (value) => {
   document.getElementsByClassName('progress-bar')[0].style.width = `${value}%`;
}

   let step = document.getElementsByClassName('step');
   let prevBtn = document.getElementById('prev-btn');
   let nextBtn = document.getElementById('next-btn');
   let submitBtn = document.getElementById('submit-btn');
   let form = document.getElementsByTagName('form')[0];
   let preloader = document.getElementById('preloader-wrapper');
   let bodyElement = document.querySelector('body');
   let succcessDiv = document.getElementById('success');
   var value;
   //form.onsubmit = () => { return false }

   let current_step = 0;
   let stepCount = 6;
   step[current_step].classList.add('d-block');
   if(current_step == 0){
      prevBtn.classList.add('d-none');
      submitBtn.classList.add('d-none');
      nextBtn.classList.add('d-inline-block');
   }

   nextBtn.addEventListener('click', () => {
      if (current_step == 2){
            let q_3 = document.getElementsByName('q_3');
            q_3.forEach((rate) => {
                if (rate.checked) {
                    value = rate.value;
                }
            });
      }      
      
      if (value == 'no_One'){
        prevBtn.classList.remove('d-none');
        prevBtn.classList.add('d-inline-block');
        nextBtn.classList.add('d-none');
        step[7].classList.remove('d-none');
        step[7].classList.add('d-block');
        step[current_step].classList.remove('d-block');
        step[current_step].classList.add('d-none');
      } else {
          current_step++;
          let previous_step = current_step - 1;
          if(( current_step > 0) && (current_step <= stepCount)){
            prevBtn.classList.remove('d-none');
            prevBtn.classList.add('d-inline-block');
            step[current_step].classList.remove('d-none');
            step[current_step].classList.add('d-block');
            step[previous_step].classList.remove('d-block');
            step[previous_step].classList.add('d-none');
            if (current_step == stepCount){
              submitBtn.classList.remove('d-none');
              submitBtn.classList.add('d-inline-block');
              nextBtn.classList.remove('d-inline-block');
              nextBtn.classList.add('d-none');
            }
          } else {
            if(current_step > stepCount){
                form.onsubmit = () => { return true }
            }
          }
        progress((100 / stepCount) * current_step);
      }
    });


   prevBtn.addEventListener('click', () => {
      step[7].classList.add('d-none');
      step[7].classList.remove('d-block');
      value = "";
     if(current_step > 0){
        current_step--;
        let previous_step = current_step + 1; 
        prevBtn.classList.add('d-none');
        prevBtn.classList.add('d-inline-block');
        step[current_step].classList.remove('d-none');
        step[current_step].classList.add('d-block')
        step[previous_step].classList.remove('d-block');
        step[previous_step].classList.add('d-none');
        if(current_step < stepCount){
           submitBtn.classList.remove('d-inline-block');
           submitBtn.classList.add('d-none');
           nextBtn.classList.remove('d-none');
           nextBtn.classList.add('d-inline-block');
           prevBtn.classList.remove('d-none');
           prevBtn.classList.add('d-inline-block');
        } 
     }

     if(current_step == 0){
        prevBtn.classList.remove('d-inline-block');
        prevBtn.classList.add('d-none');
     }
    progress((100 / stepCount) * current_step);
   });




