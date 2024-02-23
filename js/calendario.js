document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'PHOTOSHOP',
                start: '2023-06-07',
                end:'2023-06-10'
            },
            {
                title: 'Ilustrator',
                start: '2023-06-03',
                end:'2023-06-10'
            },
            {
                title: 'Canva',
                start: '2023-06-29',
                end:'2023-06-29'
            },
            {
                title: 'Figma',
                start: '2023-07-03',
                end:'2023-07-04'
            },
            {
                title: 'React',
                start: '2023-07-10',
                end:'2023-07-13'
            }
        ]
    }); 

    calendar.render();
  });

  /*.libreria({
    opcion:valor,
    opcion2:valor,
    opcionConOpciones:[
        {
            opcionInterna:valor,
            opcionInternaUltima:valor
        },
        {
            opcionInterna:valor
        }
    ],
    opcionUltima:valor
  })*/