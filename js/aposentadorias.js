$("#btnVoltarAposentadorias").click(function () {
    window.open('index.html','janela');
});

$("#btnVoltarAposNovas").click(function () {
    window.open('index.html','janela');
});

$('#dvDetalhes').hide();
$("#btnFechar").hide();

$("#btnFechar").click(function(){
	$('#dvDetalhes').hide();
	$("#btnFechar").hide();	
});

function mostrarDetalhes(id)
{
	//alert(id);
	if (id == "1")
	{
		$('#dvDetalhes').show();
		$('#cad_01').show();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();		
	}
	else if (id == "2")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').show();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();
	}	
	else if (id == "3")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').show();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();
	}
   else if (id == "4")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').show();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").show();	
	}		
	 else if (id == "5")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').show();
		$('#cad_06').hide();
		$("#btnFechar").show();			
	}		
	 else if (id == "6")
	{
		$('#dvDetalhes').show();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').show();
		$("#btnFechar").show();	
		
	}else{
		$('#dvDetalhes').hide();
		$('#cad_01').hide();
		$('#cad_02').hide();	
		$('#cad_03').hide();
		$('#cad_04').hide();
		$('#cad_05').hide();
		$('#cad_06').hide();
		$("#btnFechar").hide();	
	}
}



//Tela - Menu/Benefícios/Aposentadoria 
$('#dvTodas').hide();
$('#dvRegimes').hide();

$('#btnConsultar').click(function(e){	
	if ($("#cmbBeneficio").val() != "0"){
		if ($("#cmbBeneficio").val() == "1")
		{
			$('#dvTodas').hide();
			$('#dvRegimes').show();
		}else{
			$('#dvTodas').hide();
			$('#dvRegimes').show();
		}
	}
	else{
		alert('Selecione uma opção de opção');
		$('#dvTodas').hide();
		$('#dvRegimes').hide();
	}
		
});

//Tela - Menu/Homologações/Aposentadoria 
$('#dvComTriagem').hide();
$('#dvSemTriagem').hide();

$('#btnConsultarHom').click(function(){
	
	if ($("#radio1").is(":checked"))
	{
		$('#dvComTriagem').show();
		$('#dvSemTriagem').hide();
	}else
	
	{	$('#dvComTriagem').hide();
		$('#dvSemTriagem').show();
	}
	
});

// Dashboard - Card - Triagem Inicial
$(document).ready(function(){
$("#dvAposentadoria").hide();
$("#dvPensoes").hide();	
	
   $("#tbAposentadoria>tbody>tr>td").each(function(index, elemento){
         $(elemento).bind('change', function(){
			$(elemento).find('select').attr('data-toggle', 'modal');
            $(elemento).find('select').attr('data-target', '#modal');

         });
     });
	 
	  $("#tbPensoes>tbody>tr>td").each(function(index, elemento){
         $(elemento).bind('change', function(){
            $(elemento).find('select').attr('data-toggle', 'modal');
            $(elemento).find('select').attr('data-target', '#modal');
         });
     });
	 
$("#btnConsultarTriagem").click(function(e){
	if ($("#cmbBeneficio").val() != "0"){
		if ($("#cmbBeneficio").val() == "1")
		{
			$("#dvAposentadoria").show();
			$("#dvPensoes").hide();	
		}else if ($("#cmbBeneficio").val() == "2"){
			$("#dvAposentadoria").hide();
			$("#dvPensoes").show();	
		}
	}
	else{
		alert('Selecione uma opção de benefício');
		$("#dvAposentadoria").hide();
		$("#dvPensoes").hide();	
	}
	
});


});







