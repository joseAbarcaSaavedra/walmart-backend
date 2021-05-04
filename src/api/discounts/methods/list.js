import { handleError, handleResponse } from './../../../helpers/httpResponse'
import Discounts from './../model'

/**
 * @author: jabarca
 * @description: Return a list of available product discounts in DB. By default endpoint return only positive discounts & sorted desc
 */
export default async (req, res) => {
  try {
    const query = {}
    const sort = {}

    // default params
    const { sortByPriorityDesc = 1, onlyPositiveDiscounts = 1 } = req.query

    // filter
    if (parseInt(onlyPositiveDiscounts) === 1) {
      query.discount = { $gt: 0 }
    }
    // sort
    if (parseInt(sortByPriorityDesc) === 1) {
      sort.discount = -1
    }

    const discounts = await Discounts.find(query).sort(sort).lean()

    
    // TODO - Add pagination
    // TODO - Add cache

    return handleResponse(req, res)({ discounts })
  } catch (e) {
    return handleError(req, res)(e)
  }
}
