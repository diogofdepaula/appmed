import { Box, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ImpressaoContext } from '../../../../..';
import PageA5 from '../../component/pagea5';

const ReceitaConsultorio = (props) => {

    const { impressao } = useContext(ImpressaoContext)

    return (
        <>
            <PageA5>
                <Box height={1} width={1} pt={impressao.pagesize.a5.pt} pl={impressao.pagesize.a5.pl} pb={impressao.pagesize.a5.pb} pr={impressao.pagesize.a5.pr} style={{ backgroundColor: 'yellow' }}>
                    <Typography component={'span'} variant={'h6'} align={'justify'}>
                        <Box height={1} width={1} style={{ backgroundColor: 'white' }}>
                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae ab illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                        </Box>
                    </Typography>

                </Box>
            </PageA5>
        </>
    )
}

export default ReceitaConsultorio

// <>
        //     <div style={{ width: impressao.a4Adjust.width, height: impressao.a4Adjust.height }}>
        //         <Box height={1} p={10}>
        //             <Box width={1} height={1} display="block">
        //                 <Box>
        //                     <CabecalhoSUS />
        //                 </Box>
        //                 <Box
        //                     height='calc(100% - 110px)' // se mudar o Cabecalho tem que ajustar aqui depois
        //                     p={5} border={3} borderColor={"black"} >
        //                     <Box display="block" height={1}>
        //                         <Box justifyContent="center">
        //                             <Box display="block">
        //                                 <Box>
        //                                     {props.via && <ViaSUS via={props.via} />}
        //                                 </Box>
        //                                 <Box>
        //                                     <IdentificacaoSUS />
        //                                 </Box>
        //                             </Box>
        //                             <Box>
        //                                 {props.prescricoes?.map((p, i) => <div key={i}><PrescricaoSUS prescricao={p} mes={props.mes} /></div>)}
        //                             </Box>
        //                         </Box>
        //                     </Box>
        //                     <Box>
        //                         <DataSUS mes={props.mes} />
        //                     </Box>
        //                 </Box>
        //                 <Box>
        //                     <RodapeSUS />
        //                 </Box>
        //             </Box>
        //         </Box>
        //     </div>
        // </>