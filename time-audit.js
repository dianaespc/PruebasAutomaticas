'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_TIME = 3000;

class APIAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'time-audit',
            description: 'Prueba tiempo api inicial',
            failureDescription: 'Se demoro mas de 3 segundos en responder',
            helpText: 'El primer llamado al API tomó mas de tres segundos en dar respuesta',
            requiredArtifacts: ['TimeFistCall']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeFistCall;
        console.log("LLEGO ESTE TIEMPO " + loadedTime);
        const belowThreshold = loadedTime <= MAX_API_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = APIAudit;
