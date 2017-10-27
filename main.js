(function(){
    $(document).ready(init);

function init(){
    $('#col-1_100btn').on('click', c1100btn);
    $('#col-1_200btn').on('click', c1200btn);
    $('#col-1_300btn').on('click', c1300btn);
    $('#col-2_100btn').on('click', c2100btn);
    $('#col-2_200btn').on('click', c2200btn);
    $('#col-2_300btn').on('click', c2300btn);
    $('#col-3_100btn').on('click', c3100btn);
    $('#col-3_200btn').on('click', c3200btn);
    $('#col-3_300btn').on('click', c3300btn);
    $('#team1plus').on('click', team1plus);
    $('#team1minus').on('click', team1minus);
    $('#team2plus').on('click', team2plus);
    $('#team2minus').on('click', team2minus);
}
//MODAL FUNCTION
function addClass(modalId, btnId){
    //Get elements by ID
    var modal = document.getElementById(modalId);
    var btn = document.getElementById(btnId);
    var span = document.getElementById('close');

    //Close modal
    modal.style.display = "block";
    $('#close').on('click', close);

    //Outside click 
    window.addEventListener("click", outsideClick);

    //Close modal function
    function close(div){
        $(div).remove();
        modal.style.display = "none";
    }

    //Outside click function
    function outsideClick(e, div){
        console.log("this is working");
        if(e.target == modal){
            $(div).remove();
            modal.style.display = "none";
        }
    }
}

function c1100btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-1_100Modal';
    var btnId = 'col-1_100Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    // console.log("working");
    $('#col-1_100Check').on('click', addData);
    $('#col-1_100close').on('click', closeData);
    function addData(){
        $('#col-1_100awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-1_100awnser').css('display', 'none');
        $('#col-1_100btn').css('background-color', 'blue');
    }
}

function c1200btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-1_200Modal';
    var btnId = 'col-1_200Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-1_200Check').on('click', addData);
    $('#col-1_200close').on('click', closeData);
    function addData(){
        $('#col-1_200awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-1_200awnser').css('display', 'none');
        $('#col-1_200btn').css('background-color', 'blue');
    }
}

function c1300btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-1_300Modal';
    var btnId = 'col-1_300Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-1_300Check').on('click', addData);
    $('#col-1_300close').on('click', closeData);
    function addData(){
        $('#col-1_300awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-1_300awnser').css('display', 'none');
        $('#col-1_300btn').css('background-color', 'blue');
    }
}

function c2100btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-2_100Modal';
    var btnId = 'col-2_100Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-2_100Check').on('click', addData);
    $('#col-2_100close').on('click', closeData);
    function addData(){
        $('#col-2_100awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-2_100awnser').css('display', 'none');
        $('#col-2_100btn').css('background-color', 'blue');
    }
}

function c2200btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-2_200Modal';
    var btnId = 'col-2_200Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-2_200Check').on('click', addData);
    $('#col-2_200close').on('click', closeData);
    function addData(){
        $('#col-2_200awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-2_200awnser').css('display', 'none');
        $('#col-2_200btn').css('background-color', 'blue');
    }
}

function c2300btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-2_300Modal';
    var btnId = 'col-2_300Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-2_300Check').on('click', addData);
    $('#col-2_300close').on('click', closeData);
    function addData(){
        $('#col-2_300awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-2_300awnser').css('display', 'none');
        $('#col-2_300btn').css('background-color', 'blue');
    }
}

function c3100btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-3_100Modal';
    var btnId = 'col-3_100Check';
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-3_100Check').on('click', addData);
    $('#col-3_100close').on('click', closeData);
    function addData(){
        $('#col-3_100awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-3_100awnser').css('display', 'none');
        $('#col-3_100btn').css('background-color', 'blue');
    }
}

function c3200btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-3_200Modal';
    var btnId = 'col-3_200Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-3_200Check').on('click', addData);
    $('#col-3_200close').on('click', closeData);
    function addData(){
        $('#col-3_200awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-3_200awnser').css('display', 'none');
        $('#col-3_200btn').css('background-color', 'blue');
    }
}

function c3300btn(){
    // Get ID's and send them to the addClass function
    var modalId = 'col-3_300Modal';
    var btnId = 'col-3_300Check'
    addClass(modalId, btnId);
    // Add awnser data to the modal
    $('#col-3_300Check').on('click', addData);
    $('#col-3_300close').on('click', closeData);
    function addData(){
        $('#col-3_300awnser').css('display', 'block');
    }
    
    function closeData(){
        $('#col-3_300awnser').css('display', 'none');
        $('#col-3_300btn').css('background-color', 'blue');
    }
}
 
 function team1plus(){
    var score = $('#1Score').text();
    score = Number(score);
    score = score + 100;
    $('#1Score').html(score);
 }
    
 function team1minus(){
     var score = $('#1Score').text();
    score = Number(score);
    score = score - 100;
    $('#1Score').html(score);
 }
  
function team2plus(){
     var score = $('#2Score').text();
    score = Number(score);
    score = score + 100;
    $('#2Score').html(score);
}
    
function team2minus(){
     var score = $('#2Score').text();
    score = Number(score);
    score = score - 100;
    $('#2Score').html(score);
}
    
})();
