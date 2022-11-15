exports.primeNumber = async (req, res, next) => {
    // console.log("i have been hitted")

    let n = req.query.num;
    if(!n){
        res.status(404).json({
            output:"No number Found"
        })
    }
    var store  = [], primes = [];
    for (let i = 2; i <= n; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (let j = i << 1; j <= n; j += i) 
            {
                store[j] = true;
            }
        }
    }
    let arr = primes;
   let arr_len = arr.length
   console.log(arr)
//   console.log(arr[arr_len / 2])
if(arr_len %2 == 0){
    res.status(200).json({
        output:[arr[(arr_len/2)-1],arr[arr_len/2]]

    })
}
else{
    res.status(200).json({

    output:[arr[Math.floor(arr_len/2)]]
    })
}
  };