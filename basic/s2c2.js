function logItems(n)
{
    for(let i =0 ; i < n ;i++)
    {
        console.log(i)
    }
    for(let j =0 ; j < n ;j++)
    {
        console.log(j)
    }
}

logItems(3)


// drop constant is technique to find the big O natation 
//in the above example 2 loop runs makes it as o(2n) drop the constant 2 and it is calculated as o(n) 

