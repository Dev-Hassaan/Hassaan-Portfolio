// Import our custom CSS
import './src/scss/styles.scss'

// Import all of Bootstrap's JS

import $ from 'jquery'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'


if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    // Dark
    // console.log("yes")
    $("body").attr("data-bs-theme", "dark")
  } else {
    // Light
    // console.log("no")
    $("body").attr("data-bs-theme", "light")
  }
} else {
  // console.log("sorry")
  // Default (when Media-Queries are not supported)
}