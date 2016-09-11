window.onload = function(){
	var box = document.getElementById('box');
	var bg = document.getElementById('bg');
	var box2 = document.getElementById('box2')
	var big = document.getElementById('big');
	box.onmouseover = function(){
		bg.style.display = 'block';
		box2.style.display = 'block';
	}
	box.onmousemove = function(e){
		var qy = box.getBoundingClientRect();
		var l = (e.clientX -qy.left) - bg.offsetWidth/2;
		var t = (e.clientY -qy.top) - bg.offsetHeight/2;
		if(l < 0){
			l = 0;
		}else if(l > qy.width/2){
			l = qy.width/2
		}
		if(t < 0){
			t = 0;
		}else if(t > qy.width/2){
			t = qy.width/2
		}
		bg.style.left = l + 'px';
		bg.style.top = t + 'px';
		big.style.left = -400*(l/175) + 'px';
		big.style.top = -400*(t/175) + 'px';
	}
	box.onmouseout = function(){
		bg.style.display = 'none';
		box2.style.display = 'none';
	}
}
