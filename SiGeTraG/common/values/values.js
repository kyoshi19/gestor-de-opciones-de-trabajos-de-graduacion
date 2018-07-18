(function(win){
  'use strict';

  win.MainApp.Values
  .value('patternList', {
    'numberOnly':/^[0-9]+$/,
    'alphaLatin': /^([a-zñáéíóúü]+)?$/i,
    'panamaIdPattern':/^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,5})$/i
  })


  .value('userRules',{
    'firstName':{maxlength:30, pattern: 'alphaLatin'},
    'middleName':{maxlength:30, pattern: 'alphaLatin'},
    'lastName':{maxlength:30, pattern: 'alphaLatin'},
    'secondLastName':{maxlength:30, pattern: 'alphaLatin'},
    'identification':{pattern:'panamaIdPattern'}
  })

  .value('selectOption',{
    id:null,
    name:'Seleccionar'
  });

}(window));
