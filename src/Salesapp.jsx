import React, { useRef, useState } from 'react'

function Netflix1() {
    let [price,setPrice] = useState('')
    let [cost,setCost] = useState(null)
    let [price2,setPrice2] = useState('')
    let [cost2,setCost2] = useState(null)
    let [price3,setPrice3] = useState('')
    let [cost3,setCost3] = useState(null)
    let [total,setTotal] = useState(0)
    let qty1 = useRef()
    let qty2 = useRef()
    let qty3 = useRef()



    function forPrice1() {
        if(price == ''){
            setPrice(2000)
        }else{
            setPrice('')
        }
    }

    function forCost1() {
        setCost(price * qty1.current.value)
    }


    function forPrice2() {
        if(price2 == ''){
            setPrice2(3000)
        }else{
            setPrice2('')
        }
    }
     function forCost2() {
        setCost2(price2 * qty2.current.value)
    }

     function forPrice3() {
        if(price3 == ''){
            setPrice3(40000)
        }else{
            setPrice3('')
        }
    }
     function forCost3() {
        setCost3(price3 * qty3.current.value)
    }

    function totals() {

        setTotal(cost + cost2 + cost3) 

        
    }

  return (
    <div>
        <h1 className=' text-3xl font-extrabold mb-3'>Sales App</h1>
        <table className=' border-[4px] border-black w-[700px] text-center'>
            <thead className=' border-dashed border-black border'>
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className=' border-dashed border-black border'><input type="checkbox" onClick={forPrice1}/> Bag</td>
                    <td className=' border-dashed border-black border'><input type="number" onInput={forCost1} ref={qty1} placeholder='Quantity'  className=' border border-blue-900'/></td>
                    <td className=' border-dashed border-black border'><input type="number" value={price} placeholder='Price' className=' border border-blue-900'/></td>
                    <td className=' border-dashed border-black border'><input type="number" value={cost} placeholder='Cost' className=' border border-blue-900'/></td>
                </tr>

                <tr>
                     <td className=' border-dashed border-black border'><input type="checkbox" onClick={forPrice2}/> Shoe</td>
                    <td className=' border-dashed border-black border'><input type="number" onInput={forCost2} ref={qty2} placeholder='Quantity'  className=' border border-blue-900'/></td>
                    <td className=' border-dashed border-black border'><input type="number" value={price2} placeholder='Price2' className=' border border-blue-900'/></td>
                    <td className=' border-dashed border-black border'><input type="number" value={cost2} placeholder='Cost2' className=' border border-blue-900'/></td>
                </tr>

                <tr>
                    <td className=' border-dashed border-black border'><input type="checkbox" onClick={forPrice3}/> Phone</td>
                    <td className=' border-dashed border-black border'><input type="number" onInput={forCost3} ref={qty3} placeholder='Quantity'  className=' border border-blue-900'/></td>
                    <td className=' border-dashed border-black border'><input type="number" value={price3} placeholder='Price3' className=' border border-blue-900'/></td>
                    <td className=' border-dashed border-black border'><input type="number" value={cost3} placeholder='Cost3' className=' border border-blue-900'/></td> 
                </tr>
                
            </tbody>
        </table>

        <button onClick={totals} className='h-[30px] w-[50px] bg-blue-50'>Total</button> <h1 className='
         text-4xl font-bold'>{total}</h1>
    </div>
  )
}

export default Netflix1