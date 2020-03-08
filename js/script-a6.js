  

function addProgress(evetn) {
  $("#progressbar").each(function() {
  
    let procent = evetn.target.data("progress");
  

    let current_progress = procent + parseInt($(this).attr("aria-valuenow"));



    $(this)
      .attr("aria-valuenow",current_progress)
      .css("width", current_progress + "%")
      .text(current_progress+"%");

  }); 
 
}

  
function init() {
  $("#btn-1").click(addProgress);
  console.log("скрипт подгрузился");
}

 $(document).ready(init); 