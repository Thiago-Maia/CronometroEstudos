export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');

    const horasEmSegundos = Number(horas) * 3600;
    const minutosEmSegundos = Number(minutos) * 60;
    return horasEmSegundos + minutosEmSegundos + Number(segundos);
}

export function segundosParaTempo(segundos: number){
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosResto = segundos % 60;

    const horasFormatada = horas.toString().padStart(2, '0');
    const minutosFormatado = minutos.toString().padStart(2, '0');
    const segundosFormatado = segundosResto.toString().padStart(2, '0');

    return `${horasFormatada}:${minutosFormatado}:${segundosFormatado}`;
}