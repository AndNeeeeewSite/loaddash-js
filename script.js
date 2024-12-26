//                        1.
slider__input = document.querySelector('.slider__input')
slider__image = document.querySelector('.slider__image')
size = 300
slider__input.addEventListener(
    'input',
    _.debounce(
    () => {
        size = slider__input.value
        slider__image.style.maxWidth = (size * 3) + 'px'
    },
    100,
    {
        leading:false,
        trailing:true,
    }
  ) 
)
//               2.
div = document.querySelector('#box')
document.addEventListener('mousemove',
    _.debounce(
        (event) => {
            x = event.clientX;
            div.style.marginLeft = x + 'px'
        },
        50,
        {
            leading:true,
            trailing:false,
        }
    )
)