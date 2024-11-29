document.addEventListener('DOMContentLoaded', function () {
    // Get references to the elements
    const subject = document.getElementById('subject');
    const submitButton = document.getElementById('submitButton'); // Button
    const responseElement = document.getElementById('response'); // Response paragraph
    //const date = document.getElementById('datepicker').value;
    //const picker = datepicker(selector, options)
    const testArray = [];
  
  
  
    // Add an event listener to the button
    addTest.addEventListener('click',function(){
        additionalButtons.classList.remove('hidden');

    });
    submitButton.addEventListener('click', function () {
      const dateInput = document.getElementById('datepicker').value;
      const date = new Date(dateInput);
      var q = new Date();
      var dateNow = new Date(q.getFullYear(),q.getMonth(),q.getDate());
      //const date = date.value;
      if (subject && date){
        var newEntry = [subject, date];
        let Difference_In_Time = date.getTime() - dateNow.getTime();
        let Difference_In_Days = Math.round (Difference_In_Time / (1000 * 3600 * 24));
        alert(Difference_In_Days);
        testArray.push(newEntry);
      } else{
        alert('Please fill out all fields first');
      }
    });
  });