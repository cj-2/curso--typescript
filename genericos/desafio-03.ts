// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type ChaveValor<C, V> = {
  chave: C
  valor: V
}

class Mapa<C, V> {
  private itens: Array<ChaveValor<C, V>> = new Array<ChaveValor<C, V>>()

  public obter(chave: C): ChaveValor<C, V> | null {
    let resultado = this.itens.filter((i) => i.chave === chave)
    return resultado ? resultado[0] : null
  }

  public colocar(item: ChaveValor<C, V>) {
    let encontrado = this.obter(item.chave)

    if (encontrado) {
      encontrado.valor = item.valor
    } else {
      this.itens.push(item)
    }
  }

  public imprimir(): void {
    console.log('Mapa :>> ', this.itens)
  }

  public limpar(): void {
    this.itens = new Array<ChaveValor<C, V>>()
  }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()
