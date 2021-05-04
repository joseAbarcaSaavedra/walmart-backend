export const handleError = (req, res) => {
  return (e) => {
    console.log('ERROR!', e)
    // TODO - trace error
    res.status(500).json({ message: 'Problems!', code: JSON.stringify(e) })
  }
}

export const handleResponse = (req, res) => {
  return (response, statusCode = 200) => {
    res.status(statusCode).json(response)
  }
}
