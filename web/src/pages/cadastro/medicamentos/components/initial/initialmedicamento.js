import InitialApresentacao from "./initialapresentacao"
import InitialNomeComercial from "./initialnomecomercial"
import InitialPosologia from "./initialposologia"

export default function InitialMedicamento() {

    const nc = InitialNomeComercial()
    const ap = InitialApresentacao()
    const pp = InitialPosologia()

    const initial = {
        farmaco: '',
        orientacoes: '',
        abreviatura: '',
        lme: false,
        controlado: false,
        favorito: false,
        classe: '',
        nomescomerciais: [nc],
        apresentacoes: [ap],
        posologias: [pp]
    }

    return initial
}