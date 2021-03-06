// PRIMEIRA ETAPA:
// N que são numero pixels;
// K (array) que é o nivel de luminosidade.

// SEGUNDA ETAPA:
// L quantos valores diferentes em k (array)
// H(k) quantas vezes o K = x se repete.
// Ha(k) soma o H(k) + H(k) da proxima coluna (meio que na diagonal)  = tendencia de dar o n de pixel.
// pk= Ha(k)/N
// k'(k_)=9*pk

// TERCEIRA ETAPA:
// Os pixels que tinham o valor de k passam a ter o valor de k'.
// g(x) = k' -> fazemos a substituição de k por k'

function start() {
    // coloque o array que deseja alterar;
    array = [0, 0, 4, 6, 8, 8, 4, 7, 8, 9, 9, 4, 3, 2, 3, 8, 2, 2, 1, 0];
    
    if (array == []){
        console.log('O array está vazio.')
    } else {
        let equalizedArray = equalize(array);
        console.log(equalizedArray);
    }
}

function equalize(array) {
    try {
        let equalizedArray = [];
        let k_ = calculateK_(array);
        for (let i = 0; i < array.length; i++){
            for (let ij = 0; ij < k_.length; ij++){
                let value = array[i];
                if (value == ij) {
                    equalizedArray.push(k_[ij])
                }
            }
        }
        return equalizedArray;
    } catch {
        console.log('Não foi possível equalizar o array.');
    }
}

function calculateL(array) {
    try {
        let total = [];
        let l;
        for (let i = 0; i < array.length; i++) {
            for (let dif = 0; dif < array.length; dif ++) {
                if(array[i] == dif) {
                    total[dif] ++;
                }
            }
        }
        l = total.length;
        return l;
    } catch {
        console.log('Não foi possível calcular o L');
    }
}

function calculateHK(array){
    try {
        let hk = [];
        let l = calculateL(array);

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
        return hk;
    } catch {
        console.log('Não foi possível calcular o HK');
    }
}

function calculateHAK(array){
    try {
        let hak = [];
        let l = calculateL(array);
        let hk = calculateHK(array);
    
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
        return hak;
    } catch {
        console.log('Não foi possível calcular o HAK');
    }
}

function calculatePK(array){
    try {
        let pk = [];
        let n;
        let hak = calculateHAK(array);
    
        n = array.length;
        for (let i = 0; i < hak.length; i++) {
            let count = hak[i]/n
            pk.push(count);
        }
        return pk;
    } catch {
        console.log('Não foi possível calcular o PK');
    }
}

function calculateK_(array){
    try {
        let k_ = []
        let pk = calculatePK(array);
    
        for (let i = 0; i < pk.length; i++) {
            let count = 9*pk[i]
            value = Math.round(count)
            k_.push(value);
        }
        return k_;
    } catch {
        console.log('Não foi possível calcular o K_');
    }
}

start();