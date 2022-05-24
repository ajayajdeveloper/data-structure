function logItems(n)
{
    for(let i =0 ; i < n ;i++)
    {
        for(let j =0 ; j < n ;j++)
        {
            for(let k =0 ; k < n ;k++)
            {
                console.log(i,j,k)
            }
        }
       
    }
   
}



logItems(3)


// to calculate the big 0(n^2) 
//the above example is used in calculat the  0(n^2) because its runs at n*n which is 0(n^2) 
