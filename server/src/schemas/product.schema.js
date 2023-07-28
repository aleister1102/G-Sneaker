import { z as zod } from "zod";

const payload = {
  body: zod.object({
    name: zod.string({
      required_error: "Name is required"
    }),
    description: zod.string({
      required_error: "Description is required"
    }),
    price: zod.number({
      required_error: "Price is required"
    }),
    image: zod.string({
      required_error: "Image is required"
    }),
    color: zod.string({
      required_error: "Color is required"
    }),
  })
}

const params = {
  params: zod.object({
    productId: zod.string({
      required_error: "Product ID is required"
    })
  })
}


export const getProductSchema = zod.object({
  ...params
})

export const createProductSchema = zod.object({
  ...payload
})

export const updateProductSchema = zod.object({
  ...payload,
  ...params
})

export const deleteProductSchema = zod.object({
  ...params
})



