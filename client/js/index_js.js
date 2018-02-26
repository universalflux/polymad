	$(document).ready(() => {
	$("#target-two").hide(function(){
		setTimeout(function(){
			$("#target-two").show();
		}, 3000)
	});
	let targetWriter = new Writer($("#target"), $("#target-cursor"), $("#target-mark"), 400, false, false, 0);
	let targetWriterTwo = new Writer($("#target-two"),$("#target-cursor"), $("#target-mark"), 400, false, false, 0);

	targetWriter.setCursor("_");
	let indexChanger = 0;
	targetWriter.setMark("> ");
	targetWriter.setTypeSpeed(100);
	targetWriterTwo.setTypeSpeed(100);

	let animate = setInterval(() => {
	targetWriter.animateCursor(400);
	}, 600);

	$('#target-two').html("</br>-------- Neural Skillset => Logic --------- </br><span class='terminal-hover'> 1. HTML5 </span></span></br><span class='terminal-hover'> 2. CSS3 </span></br><span class='terminal-hover'> 3. Javascript </span></br><span class='terminal-hover'> 4. Angular 1.5x && AngularJS </span></br><span class='terminal-hover'> 5. React </span></br><span class='terminal-hover'> 6. NodeJS </span></br><span class='terminal-hover'> 7. Express </span></br><span class='terminal-hover'> 8. MongoDB </span></br><span class='terminal-hover'> 9. GraphQL </span></br><span class='terminal-hover'> 10. Ruby</span></br><span class='terminal-hover'> 11. RAILS</span></br>---------- End Query ----------</span></br>");

	// Just For Fun. Enjoy finding new constellations ;-)

	//JS for submitting the form.
	$('#form-click').click(function() {
		let firstName = $('#first-name').val();
		$('#first-name').val("");
		let lastName = $('#last-name').val();
		$('#last-name').val("");
		let email = $('#email').val();
		$('#email').val("");
		let phone = $('#phone').val();
		$('#phone').val("");
		let info = $('#info').val();
		$('#info').val("");

		let gotcha = {
			firstName: firstName,
			lastName: lastName,
			email: email,
			phone: phone,
			info: info
		};
		console.log(gotcha);

		$('#contact-container').fadeOut(function(){
			$('#contact').html("<img id='rocket-fire' class='center-align' style='margin-top:150px;position:relative; max-width:500px; max-height: 400px;' src='images/rocket_poured.png'>");
			$('#rocket-fire').hide();
			$('#rocket-fire').fadeIn(function(){
				$('#rocket-fire').animate({
					left: '1600px',
				}, 2000, function () {
					$('#rocket-fire').hide();
					$("#contact").html('<div style="margin-top: 120px; background-color: rgba(0, 0, 0, 0.5); border-radius: 5px; 	box-shadow: 2px 2px #00d2ff; padding: 3px" class="container center-align"><h3 id="message-sent" class="white-text">' + `Your message has been sent ${firstName}, we will talk soon. </h3></div>`);
					$('#message-sent').hide();
					$('#message-sent').fadeIn(function(){

					})
				});
			});

		});

	});


(function($){

  function generateStar(canvas, ctx, starRadius){
			ctx.beginPath();
			ctx.arc(starRadius + (Math.random() * canvas.width), starRadius + (Math.random() * canvas.height), starRadius*Math.random(), 0, Math.PI*2, false);
      //ctx.arc(100, 30, starRadius, 0, Math.PI*2, false);

      var rand = Math.random();
      if(rand <= 0.5){
				  ctx.fillStyle = "rgba(255, 255, 255, 1)";
				  ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
				  ctx.shadowBlur = 3;
			}
			else if(rand > 0.75){
				  ctx.fillStyle = "rgba(255, 254, 196, 1)";
				  ctx.shadowColor = "rgba(255, 254, 196, 0.5)";
				  ctx.shadowBlur = 4;
			}
			else{
				  ctx.fillStyle = "rgba(192, 247, 255, 1)";
				  ctx.shadowColor = "rgba(192, 247, 255, 0.5)";
				  ctx.shadowBlur = 7;
			}
			ctx.fill();
	}

  $(function(){

		var canvas = document.getElementById("space");
		var context = canvas.getContext("2d");

    onresize = function(){
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    onresize();

    interval = setInterval(
      function(interval){
        generateStar(canvas, context, 3);
      }
      , 24);

    setTimeout( // Stop sreating stars after 10s
      function(){ clearInterval(interval); }
      ,10000
    );

	});
})(jQuery);
});
