import React, { useContext } from 'react'
import { ImpressaoContext } from '../../../..'

const PageA4 = ({ children }) => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <div style={{ width: impressao.pagesize.a4.width, height: impressao.pagesize.a4.height, backgroundColor: "greenyellow" }}>
                {children}
            </div>
        </>
    )
}

export default PageA4