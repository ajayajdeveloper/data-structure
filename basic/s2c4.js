function logItems(n)
{
    for(let i =0 ; i < n ;i++)
    {
        for(let j =0 ; j < n ;j++)
        {
            console.log(i,j)
        }
       
    }

    for(let k =0 ; k < n ;k++)
    {
        console.log(k)
    }
   
}

logItems(3)

// the above code is a example for non domiants 
// where the the nested will excute in 0(n^2)
// the third loop will excute in 0(n) so all together 0(n^2) + 0(n) --> drop non domiant so we get 0(n^2)
