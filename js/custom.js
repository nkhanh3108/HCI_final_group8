$(document).ready(function () {
    let user = sessionStorage.getItem('user');
    if (user) {
        // document.getElementById('menu-user').innerHTML = 'History';
        $('#login-btn').remove();
        // Add logout button vao subscribe-btn
		$('#subscribe-btn-login').append('<a href="history.html" style="text-align:center;" id="username-tag">Hello ' + user + '!</a>');
		$('#menu-user').append('<a href="history.html" >History</a>');
		$('#exit').append( '<a href="index.html" onclick="return exit()" data-toggle="tooltip" data-placement="bottom" title="Log Out"><i class="fa fa-sign-out" aria-hidden="true"></i></a>');
		
    }else{
		$('#menu-user').remove;
		$('#username-tag').remove;
		
		
	}

	
});
function exit(){
	sessionStorage.clear();
};
