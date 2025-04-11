window.onload = function () {
    let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
    let action = ['se comió', 'orinó en', 'aplastó', 'rompió'];
    let what = ['mi tarea', 'mi celular', 'el auto'];
    let when = ['antes de clase', 'mientras dormía', 'cuando hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];
  
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];
  
    document.getElementById("excuse").innerHTML =
      `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  };  