
angular
.module(appName)
.config(config);

config.$inject= [
  '$translateProvider'
];

var EStranslate = {
  // TITULOS PRINCIPALES
  'utp.name'                        : 'Universidad Tecnológica de Panamá',
  'header.faculty'                  : 'Facultad de Ingeniería de Sistemas Computacionales',
  'global.firstName'                : 'Nombre',
  'global.faculty'                  : 'Facultad',
  'global.carrer'                   : 'Carrera',
  'global.lastName'                 : 'Apellido',
  'global.id'                       : 'Cédula',
  'global.passport'                 : 'Pasaporte',
  'global.password'                 : 'Contraseña',
  'global.login'                    : 'Iniciar Sesión',
  'global.cancel'                   : 'Cancelar',
  'global.advisor'                  : 'Asesor',
  'global.title'                    : 'Título',
  'global.email'                    : 'Correo electrónico',
  'global.subject'                  : 'Asunto',
  'global.message'                  : 'Mensaje',
  'global.documentation'            : 'Documentación',
  'global.main.rules'               : 'Normas principales',
  'global.regional.center'          : 'Centro regional',
  'global.key.words'                : 'Palabras claves',
  'global.search.results'           : 'Resultados de la búsqueda',
  'global.results.count'            : 'La búsqueda ha dado {{count}} resultado/s',

  // TRABAJOS DE GRADUACIÓN
  'global.work'                     : 'Trabajo de graduación',
  'global.works'                    : 'Trabajos de graduación',
  'global.my.works'                 : 'Mis trabajos de graduación',
  'global.work.description'         : 'Descripción del trabajo',
  'global.work.type'                : 'Tipo de trabajo',
  'global.work.types'               : 'Tipos de trabajos',
  'global.work.students.count'      : 'Cantidad de estudiantes',
  'global.main.student.page.title'  : 'Busca tu opción de trabajo de graduación',
  'global.main.advisor.page.title'  : 'Administrar opciones de trabajo de graduación',
  'global.work.add'                 : 'Agregar trabajos de graduación',
  'global.work.add.button'          : 'Agregar trabajo',
  
  // MENSAJES DE ERROR DE VALIDACION
  'validation.required'             : 'El campo {0} es requerido.',
  'validation.mail'                 : "El campo {0} debe ser un correo electrónico.",
  'validation.minlength'            : "El campo {0} debe tener por lo menos {1} caracter(es).",
  'validation.maxlength'            : "El campo {0} debe tener menos de {1} caracteres.",
  'validation.min'                  : "El campo {0} debe ser como mínimo de {1}.",
  'validation.max'                  : "El campo {0} debe ser como máximo {1}.",
  'validation.pattern'              : "El campo {0} es inválido.",
  'validation.url'                  : "El campo {0} debe ser un URL válido.",
  'validation.number'               : "El campo {0} debe ser numérico.",
  'validation.unknown'              : "El campo {0} es inválido.",
  'validation.validationTitle'      : 'Hay algunos errores de validación',

  // TEXTOS DEL FOOTER
  'footer.direction'                : 'Dirección: Avenida Universidad Tecnológica de Panamá, Vía Puente Centenario,',
  'footer.utp.campus'               : 'Campus Metropolitano Víctor Levi Sasso.',
  'footer.utp.mail'                 : 'E-mail: investigadores.activos@utp.ac.pa',
  'footer.utp.phone'                : 'Teléfono. (507) 560-3000',

  /*************************
  ***   NOTICIFACIONES   ***
  *************************/

  'global.succes.work.added'        : 'Trabajo agregado correctamente',
  'global.succes.work.updated'      : 'Trabajo actualizado corectamente',
  'global.succes.work.deleted'      : 'Trabajo eliminado correctamente',
  'global.succes.mail.success'      : 'Correo enviado',

  // MENSAJES DE ERROR;
  'global.error.internet.conection' : 'Sin conección a internet',
  'global.error.no.user.find'       : 'Usuario no encontrado',
  'global.error.work.deleted'       : 'Trabajo no eliminado',
  'global.error.work.updated'       : 'Trabajo no actualizado',
  'global.error.work.added'         : 'Trabajo no agregado',

};

function config($translateProvider) {

  $translateProvider.translations('es',EStranslate);

  $translateProvider.preferredLanguage('es');

}
