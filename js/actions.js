var elTeamMember = document.getElementsByClassName('TeamMember');

function ImageJump(){
	elTeamMember.className = 'ImgUp';

}

//cant figure out this evenHandler stuff yet
	elTeamMember.addEventListener('click', function() {
		ImageJump()}
	, false);