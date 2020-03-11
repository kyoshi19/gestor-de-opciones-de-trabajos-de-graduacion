(function (win) {
  'use strict';

  win.MainApp.Values
    .value('patternList', {
      'numberOnly': /^[0-9]+$/,
      'alphaLatin': /^([a-zñáéíóúü]+)?$/i,
      'panamaIdPattern': /^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?|20(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/i,
      'email': /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    })

    .value('userRules', {
      'firstName': {
        maxlength: 30,
        pattern: 'alphaLatin'
      },
      'middleName': {
        maxlength: 30,
        pattern: 'alphaLatin'
      },
      'lastName': {
        maxlength: 30,
        pattern: 'alphaLatin'
      },
      'secondLastName': {
        maxlength: 30,
        pattern: 'alphaLatin'
      },
      'identification': {
        pattern: 'panamaIdPattern'
      },
      'email': {
        pattern: 'email'
      }
    })

    .value('selectOption', {
      id: null,
      name: 'Seleccionar'
    })

    .value('profileModel', {
      faculty: '',
      career: ''
    })

    .value('workStates', {
      available: 'WSD',
      working: 'WSP'
    });

}(window));