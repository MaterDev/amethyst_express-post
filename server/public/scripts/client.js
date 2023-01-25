$(document).ready(readyNow);

function readyNow() {
  console.log("JQ");

  // Listener for sendFood
  $('#sendFood').on('click', function() {
    sendFood();
  });

  getPastAttempts();
}


function getPastAttempts() {
    // Get history from the server
    $.ajax({
      method: 'GET',
      url: 'cat/pastAttempts',
    })
    .then(function(response) {
        console.log("SUCCESS!!!", response);
        displayPastAttempts(response)
    }).catch(function(response) {
        // notify the user
        alert('Request failed. Try again later.');
      }
    );
}

function sendFood() {
    let food = $('#foodToSend').val();
  
    console.log('Clicked Send Food');
    console.log(`Food to send ${food}`);
  
    // TODO Eventually will send to the server
    $.ajax({
      method: 'POST',
      url: '/cat/feed',
      data: {
        food: food
      }
    }).then(function(response) {
      displayPastAttempts(response);
    })
  }

// Calling the response history here
function displayPastAttempts(history) {
    console.log()
    // Clear div, to avoid duplicates
    $('#history').empty();
  
    // Assuming history is an array
    for(item of history) {
      const li = `<li>${item}</li>`;
      $('#history').append(li); 
    }
  }