import joi from "joi";

export const productSchema = joi.object({
  _id: joi.string(),
  name: joi.string().required(),
  price: joi.number().required(),
  image: joi.string(),
  description: joi.string(),
});
