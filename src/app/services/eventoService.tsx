import axios from "axios";
import { API_URL } from "../context/AuthContext";

export interface filtros{
    nome?: string;
    genero?: string;
    categoria?: string;
    localizacao?: string;
    precoMin?: number;
    precoMax?: number
}

export async function listarEventos(filtros?: filtros, pagina =0){
    const resposta = await axios.get(`${API_URL}/api/wavepass/eventos`, {
        params:{
            ...filtros,
            page: pagina,
            size: 12
        }
    })
    return resposta.data;
}