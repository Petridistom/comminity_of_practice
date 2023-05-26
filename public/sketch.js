document.body.style.margin = 0
document.body.style.overflow = 'hidden'

const cnv = document.createElement('canvas');
cnv.width  = window.innerWidth
cnv.height = window.innerHeight
document.body.appendChild(cnv)

const ctx = cnv.getContext('2d')


requestAnimationFrame (draw_frame)

function draw_frame () {

    // draw the background
    ctx.fillStyle = 'turquoise'
    ctx.fillRect (0, 0, cnv.width, cnv.height)


    
    requestAnimationFrame(draw_frame)
}