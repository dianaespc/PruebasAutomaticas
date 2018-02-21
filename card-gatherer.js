'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToCard extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.cardLoadTime')
            .then(cardLoadTime => {
                if (!cardLoadTime) {

                    throw new Error('Unable to find card load metrics in page');
                }
                return cardLoadTime;
            });
    }
}

class TimeFistCall extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.tiempoInicial')
            .then(tiempoInicial => {
                if (!tiempoInicial) {

                    throw new Error('No encontro tiemppo inicial');
                }
                return tiempoInicial;
            });
        return driver.evaluateAsync('window.tiempoFinal')
            .then(tiempoFinal => {
                if (!tiempoFinal) {

                    throw new Error('No encontro tiemppo final');
                }
                return tiempoFinal;
            });
    }
}

module.exports = TimeToCard, TimeFistCall;
