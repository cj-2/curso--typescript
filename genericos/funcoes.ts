function outroEcho<T>(data: T): T {
  return data
}

type Echo = <T>(data: T) => T

// Tipando funções com generics
const chamarEcho: Echo = outroEcho

console.log(chamarEcho<string>('Qualquer coisa...'))
