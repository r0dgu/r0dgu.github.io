function actualizarSelect(opciones){
    var inspectionLvl = document.getElementById('inspectionLvl');
    inspectionLvl.innerHTML = '<option value="default">Selecciona una opción</option>';
    opciones.forEach(function(opcion) {
        var option = document.createElement('option');
        option.value = opcion.value;
        option.text = opcion.text;
        inspectionLvl.appendChild(option);
    });
}

function manejarCambiosDeOpciones() {
    var radios = document.querySelectorAll('input[type="radio"].radio-button');

    var general = [
        { value: "1", text: "I" },
        { value: "2", text: "II" },
        { value: "3", text: "III" }   
    ]
    var especial = [
        { value: "4", text: "S-1" },
        { value: "5", text: "S-2" },
        { value: "6", text: "S-3" },
        { value: "7", text: "S-4" }
    ];

    radios.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                if (radio.value === 'general') {
                    actualizarSelect(general);
                } else if (radio.value === 'especial') {
                    actualizarSelect(especial);
                }
            }
        });
    });
}

function actualizarSelect2(opciones){
    var nca = document.getElementById('nca');
    nca.innerHTML = '<option value="default">Selecciona una opción</option>';
    opciones.forEach(function(opcion) {
        var option2 = document.createElement('option');
        option2.value = opcion.value;
        option2.text = opcion.text;
        nca.appendChild(option2);
    });
}

function manejarCambiosDeOpciones2() {
    var radios2 = document.querySelectorAll('input[type="radio"].muestreoType');
    var simple = [
        { value: "0.010", text: "0.010" },
        { value: "0.015", text: "0.015" },
        { value: "0.025", text: "0.025" },
        { value: "0.040", text: "0.040" },
        { value: "0.055", text: "0.055" },
        { value: "0.10", text: "0.10" },
        { value: "0.15", text: "0.15" },
        { value: "0.25", text: "0.25" },
        { value: "0.40", text: "0.40" },
        { value: "0.65", text: "0.65" },
        { value: "1.0", text: "1.0" },
        { value: "1.5", text: "1.5" },
        { value: "2.5", text: "2.5" },
        { value: "4.0", text: "4.0" },
        { value: "6.5", text: "6.5" },
        { value: "10", text: "10" },
        { value: "15", text: "15" },
        { value: "25", text: "25" },
        { value: "40", text: "40" },
        { value: "65", text: "65" },
        { value: "100", text: "100" },
        { value: "150", text: "150" },
        { value: "250", text: "250" },
        { value: "400", text: "400" },
        { value: "650", text: "650" },
        { value: "1000", text: "1000" },
    ];

    radios2.forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (radio.checked) {
                if (radio.value === 'simple') {
                    actualizarSelect2(simple);
                } else if (radio.value === 'doble') {
                    actualizarSelect2(  S);
                    
                }
                else if (radio.value === 'multiple') {
                    actualizarSelect2('null');
                }
            }
        });
    });
}

manejarCambiosDeOpciones();
manejarCambiosDeOpciones2();

window.addEventListener('load', function() {
    var radios = document.querySelectorAll('input');
    var select = document.getElementById('unidadesLotes');
    
    radios.forEach(function(radio) {
        radio.checked = false;
    });

    unidadesLotes.value = '';
    
    select.selectedIndex = 0;
});

function btnEnviar(){
    function letraCodigo(){
        var unidadesLotes = parseFloat(document.getElementById('unidadesLotes').value);
        var tipoInspeccion = document.querySelector('input[name="opcion"]:checked').value;
        var nivelInspeccion = document.querySelector('select#inspectionLvl').value;
        var elementoResultado = document.getElementById('resultado');

        var resultadoLetra = '';


        var s1 = ['A','A','A','A','B','B','B','B','C','C','C','C','D','D','D'];
        var s2 = ['A','A','A','B','B','B','C','C','C','D','D','D','E','E','E'];
        var s3 = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H'];
        var s4 = ['A','A','B','C','C','D','E','E','F','G','G','H','J','J','K'];
        var g1 = ['A','A','B','C','C','D','E','F','G','H','J','K','L','M','N'];
        var g2 = ['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q'];
        var g3 = ['B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R'];


        var rangoLetras = [
            { min: 2, max: 8, index: 0 },
            { min: 9, max: 15, index: 1 },
            { min: 16, max: 25, index: 2 },
            { min: 26, max: 50, index: 3 },
            { min: 51, max: 90, index: 4 },
            { min: 91, max: 150, index: 5 },
            { min: 151, max: 280, index: 6 },
            { min: 281, max: 500, index: 7 },
            { min: 501, max: 1200, index: 8 },
            { min: 1201, max: 3200, index: 9 },
            { min: 3201, max: 10000, index: 10 },
            { min: 10001, max: 35000, index: 11 },
            { min: 35001, max: 150000, index: 12 },
            { min: 150001, max: 500000, index: 13 },
            { min: 500001, max: Infinity, index: 14 }
        ];

        for (let range of rangoLetras) {
            if (
                unidadesLotes >= range.min && unidadesLotes <= range.max
            ){
                if(tipoInspeccion === 'general'){
                    if(nivelInspeccion === '1'){
                        resultadoLetra = g1[range.index];
                        break;
                    }else if(nivelInspeccion === '2'){
                        resultadoLetra = g2[range.index];
                        break;
                    }else if(nivelInspeccion === '3'){
                        resultadoLetra = g3[range.index];
                        break;
                    }
                }else if(tipoInspeccion === 'especial'){
                    if(nivelInspeccion === '4'){
                        resultadoLetra = s1[range.index];
                        break;
                    }else if(nivelInspeccion === '5'){
                        resultadoLetra = s2[range.index];
                        break;
                    }else if(nivelInspeccion === '6'){
                        resultadoLetra = s3[range.index];
                        break;
                    }else if(nivelInspeccion === '7'){
                        resultadoLetra = s4[range.index];
                        break;
                    }
                }   
            }
        }

        elementoResultado.textContent = resultadoLetra;
        return elementoResultado;
    }

    function tamanoMuestra() {
        var abcda = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R'];
        var tmnmuestra = [2,3,5,8,13,20,32,50,80,125,200,315,500,800,1250,2000];

        var tmnfinal = '';

        var letraCodigo = document.getElementById('resultado').textContent;

        var tmnfinalDOM = document.getElementById('tmnmostra');

        for(let i =0 ; i< abcda.length ; i++){
            if(letraCodigo === abcda[i]){
                tmnfinal = tmnmuestra[i]
                break;
            }
        }
        
        tmnfinalDOM.textContent = tmnfinal;

    }

    function nAceptacion() {
        var nca = document.getElementById('nca');
        var selection = nca.value;
        var letraCodigo = document.getElementById('resultado').textContent;

        var nacceptDom = document.getElementById('nAccept');
        var nrejectDom= document.getElementById('nReject')
        var nAccept ='';
        var nRechazo='';

        var simple = [
            "0.010", "0.015", "0.025", "0.040", "0.055",
            "0.10", "0.15", "0.25", "0.40", "0.65",
            "1.0", "1.5", "2.5", "4.0", "6.5",
            "10", "15", "25", "40", "65",
            "100", "150", "250", "400", "650", "1000"
        ];

        for(var i= 0; i<= simple.length ; i++){
            if(selection === simple [0] || selection === simple [1]){
                switch(simple){
                    case(i): 
                        nAccept = 0;
                        nRechazo = 1;
                        break
                }
            }else if(selection === simple [2]){
                if(letraCodigo === 'Q' || letraCodigo === 'R'){
                    nAccept = 1;
                    nRechazo = 2;
                    break
                }else {
                    nAccept = 0;
                    nRechazo = 1;
                    break
                }
            }else if(selection === simple[3]){
                if(letraCodigo === 'P' || letraCodigo === 'Q'){
                    nAccept = 1;
                    nRechazo = 2;
                    break
                }else if(letraCodigo === 'R'){
                    nAccept = 2;
                    nRechazo = 3;
                    break
                }else {
                    nAccept = 0;
                    nRechazo = 1;
                    break
                }
            } else if (selection === simple[4]) {
                if(letraCodigo === 'N' || letraCodigo === 'P'){
                    nAccept = 1;
                    nRechazo = 2;
                    break
                } else if(letraCodigo === 'Q'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if (letraCodigo === 'R'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                }else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }
            } else if (selection === simple[5]) {
                if(letraCodigo === 'M' || letraCodigo === 'N'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='P'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'Q'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'R'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }
            } else if (selection === simple[6]) {
                if(letraCodigo === 'L' || letraCodigo === 'M'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='N'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'P'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'Q'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'R'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }
            } else if (selection === simple[7]) {
                if(letraCodigo === 'K' || letraCodigo === 'L'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='M'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'N'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'P'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'Q'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'R'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }            
            } else if (selection === simple[8]) {
                if(letraCodigo === 'J' || letraCodigo === 'K'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='L'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'M'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'N'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'P'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'Q'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'R'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }            
            } else if (selection === simple[9]) {
                if(letraCodigo === 'H' || letraCodigo === 'J'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='K'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'L'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'M'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'N'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'P'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'Q'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if(letraCodigo === 'R'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }            
            } else if (selection === simple[10]) {
                if(letraCodigo === 'G' || letraCodigo === 'H'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='J'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'K'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'L'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'M'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'N'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'P'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if(letraCodigo === 'Q' || letraCodigo === 'R'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }
            } else if (selection === simple[11]) {
                if(letraCodigo === 'F' || letraCodigo === 'G'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='H'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'J'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'K'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'L'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'M'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'N'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if(letraCodigo === 'P' || letraCodigo === 'Q' || letraCodigo === 'R'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }
            } else if (selection === simple[12]) {
                if(letraCodigo === 'E' || letraCodigo === 'F'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='G'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'H'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'J'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'K'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'L'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'M'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if(letraCodigo === 'N' || letraCodigo === 'P' || letraCodigo === 'Q' || letraCodigo === 'R'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else {
                    nAccept = 0;
                    nRechazo = 1;
                    break;
                }
            } else if (selection === simple[13]) {
                if(letraCodigo === 'D' || letraCodigo === 'E'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='F'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'G'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'H'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'J'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'K'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'L'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if(letraCodigo === 'A' || letraCodigo === 'B' || letraCodigo === 'C'){
                    nAccept = 0;
                    nRechazo = 1;
                    
                }
                else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[14]) {
                if(letraCodigo === 'C' || letraCodigo === 'D'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='E'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'F'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'G'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'H'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'J'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'K'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if(letraCodigo === 'A' || letraCodigo === 'B'){
                    nAccept = 0;
                    nRechazo = 1;
                    
                }
                else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[15]) {
                if(letraCodigo === 'A' || letraCodigo === 'B' || letraCodigo === 'C'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='D'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'E'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'F'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'G'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'H'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'J'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[16]) {
                if(letraCodigo === 'A' || letraCodigo === 'B'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='C'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'D'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'E'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'F'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'G'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'H'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[17]) {
                if(letraCodigo === 'A'){
                    nAccept = 1;
                    nRechazo = 2;
                    break;
                } else if(letraCodigo ==='B'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'C'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'D'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'E'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'F'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'G'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[18]) {
                if(letraCodigo ==='A'){
                    nAccept = 2;
                    nRechazo = 3;
                    break;
                } else if(letraCodigo === 'B'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'C'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'D'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'E'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'F'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[19]) {
                if(letraCodigo === 'A'){
                    nAccept = 3;
                    nRechazo = 4;
                    break;
                } else if(letraCodigo === 'B'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'C'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'D'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'E'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[20]) {
                if(letraCodigo === 'A'){
                    nAccept = 5;
                    nRechazo = 6;
                    break;
                }else if(letraCodigo === 'B'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'C'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'D'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else {
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
            } else if (selection === simple[21]) {
                if(letraCodigo === 'A'){
                    nAccept = 7;
                    nRechazo = 8;
                    break;
                }else if(letraCodigo === 'B'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'C'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if (letraCodigo === 'D'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else {
                    nAccept =30;
                    nRechazo =31;
                    break;
                }
                
            } else if (selection === simple[22]) {
                if(letraCodigo === 'A'){
                    nAccept = 10;
                    nRechazo = 11;
                    break;
                }else if(letraCodigo === 'B'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if (letraCodigo === 'C'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else if(letraCodigo === 'D'){
                    nAccept =30;
                    nRechazo =31;
                    break;
                }else {
                    nAccept = 44;
                    nRechazo = 45;
                }
            } else if (selection === simple[23]) {
                if(letraCodigo === 'A'){
                    nAccept = 14;
                    nRechazo = 15;
                    break;
                }else if (letraCodigo === 'B'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else if(letraCodigo === 'C'){
                    nAccept =30;
                    nRechazo =31;
                    break;
                }else {
                    nAccept = 44;
                    nRechazo = 45;
                }
            } else if (selection === simple[24]) {
                if (letraCodigo === 'A'){
                    nAccept =21;
                    nRechazo =22;
                    break;
                }
                else if(letraCodigo === 'B'){
                    nAccept =30;
                    nRechazo =31;
                    break;
                }else {
                    nAccept = 44;
                    nRechazo = 45;
                }
            } else if (selection === simple[25]) {
                if(letraCodigo === 'A'){
                    nAccept =30;
                    nRechazo =31;
                    break;
                }else {
                    nAccept = 44;
                    nRechazo = 45;
                }

        }
               
        
    }
        nacceptDom.textContent = nAccept;
        nrejectDom.textContent = nRechazo; 
    
    }

    letraCodigo();
    tamanoMuestra();
    nAceptacion();
}