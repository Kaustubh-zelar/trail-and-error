document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    
    let nameValid = /^[A-Za-z\s]+$/.test(fullname);
    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (!nameValid) {
      alert('Please enter a valid full name');
      return;
    }
    
    if (!emailValid) {
      alert('Please enter a valid email address');
      return;
    }
    
    document.querySelector('.main').classList.add('hide');
    let header = document.querySelector('h1');
    header.classList.add('center');
    
    $("#login-button").click(function(event){
        event.preventDefault();
      
      $('form').fadeOut(500);
      $('.wrapper').addClass('form-success');
   });
  });