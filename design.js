
let gridH, gridW, color;
let table = $('#pixelCanvas');


function makeGrid(gridH,gridW){
	const tbody = $("<tbody></tbody>");	
	
	for(let x = 0; x < gridH; x++) {		
		let newRow = $('<tr class = "col"></tr>');
		for (let y = 0; y < gridW; y++) {
			let newCell = $('<td class = "cell"></td>');	
			$(newRow).append(newCell);			
			}	
		$(tbody).append(newRow);	
		}
	table.append(tbody);
	};




$('#sizePicker').submit(function( event ) {
 		table.children().remove();
 		event.preventDefault();
 		gridH = $('#inputHeight').val();
 		gridW = $('#inputWidth').val(); 	
 		color = $('#colorPicker').val();
 		makeGrid(gridH,gridW);
 		fillCell();
 		});
 		 
function fillCell(){
	color = $('#colorPicker').val();


	
	$('td').on('click',function(){
		if ($('td').css('background-color') === color){
			$('td').css('background-color', '#FFFFFF')
		} else {$('td').css('background-color', color)};
	})};












 		

 	







