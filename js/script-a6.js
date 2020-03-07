  
const maxAllowedChecks = 2;

function trackChecks() {
  let checkCount = $("input[type=checkbox]:checked").length;
  $("input[type=checkbox]:not(:checked)").prop("disabled", checkCount >= maxAllowedChecks);
}
 
function trackRadios() {
    $("input[type=radio]").prop("disabled", true);
  }
  
  function init() {
    $("input[type=checkbox]").change(trackChecks);
    $("input[type=radio]").change(trackRadios);
 
   console.log("скрипт подгрузился");
  }

 $(document).ready(init); 