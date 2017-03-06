const moment = require('moment')
const Blazy = require('./libraries/blazy.min.js')
import {showHideContent} from './helpers.js'



showHideContent('.intro')

/**
 * Lazy loads all images http://dinbror.dk/blog/blazy/
 */
new Blazy({
  selector : 'img',
  offset : 0,
  successClass : 'image-loaded'
})

/**
 * Gets user's local time and returns a custom greeting based on the time
 */
const currTime = new Date()
const timeStamp = currTime.toJSON()
const time = moment(timeStamp).format('HH:mm')


const timedGreeting = () => {
  let greeting = ''

  if (time >= '00:00' && time <= '11:59') {
    greeting = 'Good Morning, '
  }
  if (time >= '12:00' && time <= '16:59') {
    greeting = 'Good Afternoon, '
  }
  if (time >= '17:00' && time <= '23:59') {
    greeting = 'Good Evening, '
  }

  return greeting
}

Array.prototype.slice.call(document.querySelectorAll('.intro section > p:first-child')).forEach(i => { i.insertAdjacentText('afterbegin', timedGreeting()) })
