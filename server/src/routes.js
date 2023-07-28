import validateResource from "./middlewares/validateResource.js";
import { getAllProductHandler, getProductHandler, createProductHandler, deleteProductHandler, updateProductHandler } from "./controllers/product.controller.js";
import { getProductSchema, createProductSchema, deleteProductSchema, updateProductSchema } from "./schemas/product.schema.js";

function routes(app) {
  app.get('/healthcheck', (req, res) => {
    res.sendStatus(200);
  })

  app.get('/api/v1/products', getAllProductHandler)
  app.get('/api/v1/products/:productId', validateResource(getProductSchema), getProductHandler)
  app.post('/api/v1/products', validateResource(createProductSchema), createProductHandler)
  app.delete('/api/v1/products/:productId', validateResource(deleteProductSchema), deleteProductHandler)
  app.put('/api/v1/products/:productId', validateResource(updateProductSchema), updateProductHandler)
}

export default routes