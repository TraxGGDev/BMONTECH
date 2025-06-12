import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  // nombre del producto (string, obligatorio)
   title:{
    type:String,
    required:true,
   },

  // descripción (string, opcional o obligatorio)
   description:{
    type:String,
    required:true,
   },

  // precio (número, obligatorio)
  price:{
    type:Number,
    required:true,
    min:0,
  },

  // imagen (URL como string, opcional)

  image:{
    type:String,
  },

  //SKU
  sku:{
    type:String,
    unique:true,
  },

  // stock (número, opcional)
  stock:{
    type:Number,
    required:true,
    min:0,
  },

  // categoría (string, opcional)
  category:{
    type:String,
  },
},{
    timestamps:true
});


productSchema.pre('save', async function (next) {
  // Solo generar SKU si aún no existe
  if (!this.sku) {
    try {
      // Ejemplo de lógica para contar productos existentes
      const count = await this.model('Product').countDocuments();

      // Lógica personalizada para generar el SKU
      // Por ejemplo: "SKU-" + (count + 1).toString().padStart(4, '0')
      const generatedSku = 'PC-' + (count+1).toString().padStart(4,'0');

      this.sku = generatedSku;
    } catch (err) {
      return next(err); // en caso de error, pasa al manejador
    }
  }

  next(); // continuar con el guardado
});

const Product = mongoose.model('Product', productSchema);

export default Product;
