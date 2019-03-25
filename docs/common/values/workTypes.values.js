(function(win) {
  'use strict';

  win.MainApp.Values
    .value('workTypesValue', [
      {
        id: "T",
        title: 'Trabajo teórico',
        name: 'consiste de una tesis sobre una investigación inédita que concluye con un nuevo modelo o resultados sobre un tema tratado. El trabajo deberá incluir la formulación de una hipótesis, la cual debe estar acompañada del desarrollo de modelos teóricos y/o cálculos que justifiquen los resultados.'
      },

      {
        id: "TP",
        title: 'Trabajo teórico-práctico',
        name: 'Consiste de una tesis sobre la aplicación de los fundamentos teóricos a la solución de un problema o necesidad existente en la sociedad. El trabajo deberá incluir experiencias de laboratorio y/o cálculos que justifiquen la solución propuesta.'
      },

      {
        id: "P",
        title: 'Práctica profesional',
        name: 'Consiste de una práctica supervisada durante un período de seis (6) meses en una empresa privada o Institución Pública, dentro o fuera del país.  Al final de la práctica, se debe presentar un informe donde se establece en forma sistemática tanto las experiencias ganadas como los aportes creativos que el graduando ha dado a la empresa.'
      },

      {
        title: 'Cursos de postgrado',
        name: 'En este caso el estudiante podrá matricular asignaturas de postgrado en la Universidad Tecnológica, con seis (6) o más créditos en total.'
      },

      {
        title: 'Cursos en Universidades Extranjeras',
        name: 'Con esta opción el estudiante podrá matricular en una Universidad Extranjera (establecida en el exterior) seis (6) o más réditos de cursos de postgrado o nueve (9) créditos de pregrado de último nivel en el área de su especialidad y aprobados por la unidad académica correspondiente. En este caso debe existir un convenio previo de cooperación y/o intercambio entre la Universidad Tecnológica de Panamá y la Universidad Extranjera de que se trate.'
      },

      {
        title: 'Certificación internacional',
        name: 'Consiste de un curso con un mínimo de 100 horas de clases presénciales, evaluado y certificado por un organismo certificador de reconocimiento internacional. En este caso debe existir previo acuerdo de cooperación y/o intercambio entre la Universidad Tecnológica y el Organismo certificador de que se trate. Esta opción debe incluir constancia de una certificación vigente y un trabajo final de beneficio tangible para la Universidad Tecnológica de Panamá. Lo podrán tomar estudiantes que tengan índice no menor de 1.5 cuando matriculan el Trabajo de Graduación.'
      },
  ]);

}(window));