var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })
//const selector1 = 'h2'//page_name
//const selector2 = 'div'//'clear_fix_profile_info_row'

nightmare
  .goto('https://vk.com/annitek')
  .evaluate(() => {
    return document.querySelector('h2.page_name').innerHTML
  })
  .end()
  /*.evaluate(() => {
    return document.querySelector('div.clear_fix_profile_info_row').innerHTML
  })
  .end()*/
  .then(result => {
    console.log(result)
  })
  .catch(function(error) {
    console.error('Search failed:', error)
  })
