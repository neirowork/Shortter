import express from 'express'
const app = express()

app.get('/:serviceName', (req, res) => {
  switch (req.params.serviceName) {
    case 'twitter':
      return res.redirect('https://twitter.com/intent/user?user_id=303604781')
    case 'facebook':
      return res.redirect('https://facebook.com/nirot1r')
    case 'github':
      return res.redirect('https://github.com/nirot1r')
    case 'mail':
      return res.redirect('mailto://nirot1r@g-second.net')
    default:
      return res.status(404).send('…？')
  }
})

app.listen(3030, () => console.log('Shortter listening on port 3030!'))
