class Cookie{
    constructor(color)
    {
        this.color = color
    }
    getColor()
    {
        return this.color
    }
    setColor(color)
    {
        this.color = color
    }
}

let cookieOne = new Cookie("green")
console.log(cookieOne)
let cookieTwo = new Cookie("blue")
console.log(cookieTwo)
console.log(cookieOne)
cookieOne.setColor("yellow")
console.log(cookieOne)

//how classes are used 




