import SpriteSheet from './SpriteSheet.js'

import { loadImage } from './loaders.js'

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

loadImage('./img/tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16)
        sprites.define('ground', 0, 0)
        sprites.draw('ground', context, 40, 60)
        // .drawImage to funkcja polimorficzna => wykonuje różne działania w zależności od liczby i typu argumentów
    })