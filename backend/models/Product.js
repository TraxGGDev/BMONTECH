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

const Product = mongoose.model('Product', productSchema);

export default Product;
