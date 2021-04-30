import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'

const PageA5 = ({ children }) => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <div style={{ width: impressao.pagesize.a5.width, height: impressao.pagesize.a5.height, backgroundColor: "greenyellow" }}>
                {children}
            </div>
        </>
    )
}

export default PageA5