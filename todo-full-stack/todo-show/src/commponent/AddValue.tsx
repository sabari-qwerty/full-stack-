import { useState, FC } from 'react'
import axios from 'axios'


interface addValue {
    setSusccess: any
}

export const AddValue: FC<addValue> = ({ setSusccess }) => {
    const [ value, setValue ] = useState('')


    var data = JSON.stringify({
        "text": value
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };




    const postDate = async () => axios(config)
        .then(function (response) {
            setSusccess(response.data[ 'message' ])
        })
        .catch(function (error) {
            console.log(error);
        });


    return (
        <div className='flex justify-center w-full m-5 '>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value)
            }} className="input input-bordered input-error w-full max-w-xs" />
            <button onClick={() => {
                if (value.length > 0) {

                    postDate()
                } else {
                    console.log('emty value')
                }
                setSusccess(value)
                setValue("")


            }} className="btn  btn-outline btn-success ml-2" >AddValue</button>
        </div>
    )
}
