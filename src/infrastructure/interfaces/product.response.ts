export interface ProductResult {
  correcto: boolean;
  results: Result[];
}

export interface Result {
  idProducto: number;
  nombreProducto: string;
  SrcImagenProducto: string;
  tamanoProducto: string;
  precioProducto: string;
  tipo: string;
  especieMascota: string;
}
