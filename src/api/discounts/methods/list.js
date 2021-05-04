import { handleError, handleResponse } from './../../../helpers/httpResponse'
import Discounts from './../model'
export default async (req, res) => {
  try {
    const { sortByPriorityDesc = 1, onlyPositiveDiscounts = 1 } = req.query // by default
    const list = await Discounts.find({}).lean()
    let discounts = list

    // filter
    if (parseInt(onlyPositiveDiscounts) === 1) {
      discounts = discounts.filter((d) => d.discount > 0)
    }

    // sort
    if (parseInt(sortByPriorityDesc) === 1) {
      discounts = discounts.sort((a, b) => a.discount - b.discount).reverse()
    }

    // TODO - Add pagination

    // TODO - Add cache

    return handleResponse(req, res)({ discounts })
  } catch (e) {
    return handleError(req, res)(e)
  }
}
