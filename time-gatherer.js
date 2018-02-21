'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeFistCall extends Gatherer {
  afterPass(options) {
      const driver = options.driver;

      return driver.evaluateAsync('window.tiempoRespuestaAPI')
          .then(tiempoRespuestaAPI => {
              if (!tiempoRespuestaAPI) {

                  throw new Error('No encontró tiempo de respuesta');
              }
              return tiempoRespuestaAPI;
          });
  }
    /*afterPass(options) {
        const driver = options.driver;
        var resultado;
        return driver.evaluateAsync('window.tiempoInicial')
            .then(tiempoInicial => {
                if (!tiempoInicial) {
                    throw new Error('No encontro tiemppo inicial');
                }else{
                  driver.evaluateAsync('window.tiempoFinal')
                      .then(tiempoFinal => {
                          if (!tiempoFinal) {
                              throw new Error('No encontro tiemppo final');
                          }else{
                            console.log("tiempo inicial "+tiempoInicial);
                            console.log("tiempo Final "+tiempoFinal);
                            resultado = tiempoFinal-tiempoInicial;
                            console.log("Resta "+resultado);
                            return resultado;
                          }
                      });
                }
                return resultado;
            });
    }*/
}

module.exports = TimeFistCall;
