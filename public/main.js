const newArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const shuffleArray = () => {
  for (let i = newArray.length - 1; i > 0; i--) {
    // console.log(i)
    const random = Math.floor(Math.random() * newArray.length)
    console.log(random)
  }

}

document
  .querySelector('.button')
  .addEventListener('click', shuffleArray)