showHiddenBlock("hidden-block", 100);

function showHiddenBlock(blockId, speed) { 
	let blockOpacity;
	var intervalId = setInterval(function() {
		
		blockOpacity=Number(document.getElementById(blockId).style.opacity);
		
		if (blockOpacity >= 1) clearInterval(intervalId);
		
		blockOpacity += 0.1;
		document.getElementById(blockId).style.opacity = blockOpacity;
		
	}, speed);
}