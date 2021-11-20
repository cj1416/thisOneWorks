//Updates: 
//-added hide and show to the form in initValidation in else.
//-validateState added an uppercase function and a loop to search abbreviations.
//-validatecheckboxgroup now sends a message if a box is left unchecked and changes valid to True if true.
//-(fieldname).html added to end for message
const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
        
function initValidation(formName) {
  let $form = $(formName);
  $('form :input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")
  });

  $form.submit(function(event){
    $form = $(this);
    formEl=$form.get(0);
    event.preventDefault(); 
    event.stopPropagation();
    validateForm();

    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
    }
    else{
      $("#myform").hide();      
      $("#complete").show();
    }
  });
}

function validateForm() {
  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  validateCheckboxGroup("#newspaper", "find-page", "you must select at least one!"); 
}

function validateState(id, msg){
  $el = $(id).val().toUpperCase();
  let valid=false;
  for (var i=0; i<stateAbbreviations.length; i++) {
    if (stateAbbreviations[i] === $el) {
      valid = true;
      $(id).val($el);
      break;
    }
  }
  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, groupName, message) {
  let valid=false;
  if ($("input[name=" + $(groupName).selector + "]:checked").length) {
    valid=true;
  }
  setElementValidity(fieldName, valid, message);
  return valid;
}


function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  if (valid) {
    el.setCustomValidity('');
  } else {
    el.setCustomValidity(message);
  }
  $(fieldName).html(el.validationMessage);
}
