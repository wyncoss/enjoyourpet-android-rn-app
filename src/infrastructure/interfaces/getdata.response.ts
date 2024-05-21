export interface GetDataResponse {
  correcto: boolean;
  results: Result[];
}

export interface Result {
  id: number;
  especie: string;
  imagen: string;
  nombre: string;
  edad: string;
  sexo: string;
  descripcion: string;
  motivo: string;
}
