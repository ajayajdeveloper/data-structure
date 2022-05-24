function funcThree()
{
    console.log("hello")
}

function funcTwo()
{
    funcThree()
    console.log("hi")
}

function funcOne()
{
    funcTwo()
    console.log("vanakam")
}

funcOne()