(function(win) {
  'use strict';

  win.MainApp.Values
    .value('patternList', {
      'numberOnly': /^[0-9]+$/,
      'alphaLatin': /^([a-zñáéíóúü]+)?$/i,
      'panamaIdPattern': /^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/i,
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

    .value('candidateModel', {
      faculty: '',
      career: ''
    })

    .value('identificationTypes', {
      identification: {
        "id": "ID",
        "name": "Cédula"
      },
      passport: {
        "id": "PASSPORT",
        "name": "Pasaporte"
      }
    })

    .value('info', {
      deposito: {
        title: "Cuentas de depósito",
        total: 9869186848,
        tipos: 3,
        desgloce: [
          {
            title: 'Corriente',
            monto: 3504.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Ahorro',
            monto: 12.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Navidad',
            monto: 1000,
            cuenta: "035555125",
            estado: "Disponible"
    }]
      },
      credito: {
        title: "Cuentas de crédito",
        total: 451545,
        tipos: 3,
        desgloce: [
          {
            title: 'Corriente',
            monto: 3504.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Ahorro',
            monto: 12.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Navidad',
            monto: 1000,
            cuenta: "035555125",
            estado: "Disponible"
    }]
      },
      debito: {
        title: "Cuentas de crédito",
        total: 451545,
        tipos: 3,
        desgloce: [
          {
            title: 'Corriente',
            monto: 3504.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Ahorro',
            monto: 12.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Navidad',
            monto: 1000,
            cuenta: "035555125",
            estado: "Disponible"
    }]
      },
      fijo: {
        title: "Cuentas de crédito",
        total: 451545,
        tipos: 3,
        desgloce: [
          {
            title: 'Corriente',
            monto: 3504.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Ahorro',
            monto: 12.15,
            cuenta: "035555125",
            estado: "Disponible"
    },
          {
            title: 'Navidad',
            monto: 1000,
            cuenta: "035555125",
            estado: "Disponible"
    }]
      }

    });

}(window));