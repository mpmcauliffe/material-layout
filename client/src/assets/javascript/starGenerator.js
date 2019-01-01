const starGenerator = (num) => {
    let x = Math.floor(num)
    let y = num - x
    let scores = []

    for(let i = 0; i < 5; i++) {
        if(x > 0) {
            scores.push(4)
            x--
        }
    } 
    if(y > 0) {
        if(y > .66) {
            scores.push(3)
        } else if (y > .33 && y <= .66) {
            scores.push(2)
        } else if (y <= .33) {
            scores.push(1)
        }
    }
    if(scores.length < 5) {
        scores.push(0)
    }
    return scores
}


export { starGenerator }