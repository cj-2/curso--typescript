import { OperacaoBinaria } from './classes'

interface Data {
  dia: number
  mes: number
  ano: number
}

class DiferencaDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar() {
    let primeira_data = this.getTime(this.operador1)
    let segunda_data = this.getTime(this.operador2)
    
    const dia = 1000 * 60 * 60 * 24
    let diferenca = Math.abs(primeira_data - segunda_data)

    return `${Math.ceil(diferenca / dia)} dia(s).`
  }
}

let diferencaDatas = new DiferencaDatas(
  { dia: 15, mes: 12, ano: 2000 },
  { dia: 15, mes: 12, ano: 1998 }
).executar()

console.log('diferencaDatas :>> ', diferencaDatas);