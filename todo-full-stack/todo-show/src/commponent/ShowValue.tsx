import axios from 'axios'
import { json } from 'express'
import { FC, useState } from 'react'

interface data {
    id: string
    text: string
    done: boolean
    createdAt: string
    updatedAt: string
}


interface ShowValue {
    data: data[]
    setSusccess: any
}



export const ShowValue: FC<ShowValue> = ({ data, setSusccess }) => {

    const [ _id, setId ] = useState("")

    const [ value, setValue ] = useState("")




    const putValue = async (id: string, text: string, done: boolean) => {
        var config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "id": id,
                "text": text,
                "done": done
            })
        };
        await axios(config).then(() => setSusccess(id)).catch((err) => console.log(err))
    }

    const deleteValue = async (id: string) => {


        var config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: 'http://localhost:3000/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "id": id
            })
        }

        await axios(config).then(() => setSusccess(id)).catch(err => console.log(err))
        setSusccess("")
    }

    return (
        <div className=' w-3/5'>
            {
                data.map(i => i.id == _id ? <div key={i.id} className=' justify-between flex  m-auto'>
                    <input type="text" value={value} className='  input input-bordered input-success w-full max-w-xs' onChange={e => setValue(e.target.value)} />
                    <button className='btn btn-outline btn-success' onClick={() => {
                        putValue(i.id, value, i.done)
                        setId("")
                    }}>done</button>
                </div> : <div key={i.id} className='flex justify-between space-y-6'>
                    <span className={`${i.done ? "line-through" : ""} my-auto px-3`}>{i.text}</span>
                    <div className='flex justify-between w-2/4 '>

                        <button className='btn btn-outline btn-succes' onClick={() => {
                            putValue(
                                i.id, i.text, i.done ? false : true,
                            )
                            setSusccess("")

                        }} >{i.done ? "done" : "Not Done"}
                        </button>
                        <button onClick={() => deleteValue(i.id)} className='btn btn-outline btn-error'>delete</button>
                        <button onClick={() => {
                            setId(i.id)
                            setValue(i.text)
                        }} className='btn btn-outline btn-warning'>Edit</button>
                    </div>
                </div>)
            }

        </div>
    )
}
