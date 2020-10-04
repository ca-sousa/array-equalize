// PRIMEIRA ETAPA:
// N que são numero pixels;
// K que é o nivel de luminosidade. = array

// SEGUNDA ETAPA:
// L quantos valores diferentes em k (array)
// H(k) quantas vezes o K = x se repete.
// Ha(k) soma o H(k) + H(k) da proxima coluna (meio que na diagonal)  = tendencia de dar o n de pixel.
// pk= Ha(k)/N
// k'=9*pk

// TERCEIRA ETAPA:
// Os pixels que tinham o valor de k passam a ter o valor de k'.
// g(x) = k' -> fazemos a substituição de k por k'

function start() {
    // put the array that you want to change;
    array = [0, 0, 4, 6, 8, 8, 4, 7, 8, 9, 9, 4, 3, 2, 3, 8, 2, 2, 1, 0];
    
    console.log(equalize(array));
}

function equalize(array) {
    const n = array.length;
    
    const total = [];
    for (let i = 0; i < array.length; i++) {
        for (let dif = 0; dif < array.length; dif ++) {
            if(array[i] == dif) {
                total[dif] ++;
            }
        }
    }
    const l = total.length;

    const hk = [];
    for (let i = 0; i < l; i++) {
        hk.push(0);
    }
    for (let i = 0; i < array.length; i++){
        for (let equal = 0; equal < hk.length; equal ++){
            if(array[i] == equal) {
                hk[equal] ++;
            }
        }
    }

    const hak = [];
    for (let i = 0; i < l; i++) {
        hak.push(0);
    }
    for (let i = 0; i < hak.length; i++) {
        if(i == 0) {
            hak[0] = hk[0];
        } else {
            hak[i] = hak[i-1] + hk[i];
        }
    }

    const pk = [];
    for (let i = 0; i < hak.length; i++) {
        let count = hak[i]/n
        pk.push(count);
    }

    const k_ = []
    for (let i = 0; i < pk.length; i++) {
        let count = 9*pk[i]
        value = Math.round(count)
        k_.push(value);
    }

    const equalizedArray = []
    for (let i = 0; i < array.length; i++){
        for (let ij = 0; ij < k_.length; ij++){
            let value = array[i];
            if (value == ij) {
                equalizedArray.push(k_[ij])
            }
        }
    }
    return equalizedArray;
}

start();