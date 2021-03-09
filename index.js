const operacionString = "2+1*33/2*4-10".split(/([\/\+\-\*])/)
const operacion = operacionString.map(item=>Number(item) ? Number(item) : item)

console.log(operacion)

const operar = (op)=>{
    if (op.length !== 1) {
        const dividir = op.indexOf('/')
        if (dividir !== -1) {
            op.splice(dividir - 1, 3, op[dividir - 1] / op[dividir + 1])
            console.log(op)
            operar(op)
        }

        const multiplicar = op.indexOf('*')
        if (multiplicar !== -1) {
            op.splice(multiplicar - 1, 3, op[multiplicar - 1] * op[multiplicar + 1])
            console.log(op)
            operar(op)
        }

        const sumar = op.indexOf('+')
        if (sumar !== -1) {
            op.splice(sumar - 1, 3, op[sumar - 1] + op[sumar + 1])
            console.log(op)
            operar(op)
        }

        const restar = op.indexOf('-')
        if (restar !== -1) {
            op.splice(restar - 1, 3, op[restar - 1] - op[restar + 1])
            console.log(op)
            operar(op)
        }
    }

    return op
}

let nani = operar(operacion)
