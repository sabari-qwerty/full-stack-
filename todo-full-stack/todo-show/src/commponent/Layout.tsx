import { FC, ReactNode, } from 'react'
import { AddValue } from './AddValue'
import { ShowValue } from './ShowValue'


interface data {
    id: string
    text: string
    done: boolean
    createdAt: string
    updatedAt: string
}

interface LayoutProp {
    children: ReactNode
    setSusccess: any
    data: data[]
}


export const Layout: FC<LayoutProp> = ({ children, setSusccess, data }) => {

    return (
        <div>
            <AddValue setSusccess={setSusccess} />
            <div className='flex justify-center w-full'>

                <ShowValue data={data} setSusccess={setSusccess} />
            </div>

            {children}
        </div>
    )
}
