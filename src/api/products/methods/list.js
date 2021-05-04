import { handleError, handleResponse } from './../../../helpers/httpResponse'
import Products from './../model'
export default async (req, res) => {
  try {
    const products = await Products.find({}).lean()

    // TODO - Add pagination

    // TODO - Add cache
    return handleResponse(req, res)({ products })
  } catch (e) {
    return handleError(req, res)(e)
  }
}
