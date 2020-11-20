import { Divider } from '@material-ui/core';
import React, { useContext } from 'react';
import { AtendimentoContext } from '../..';
import EditorAppBar from '../../pages/prescricoes/components/appbar/editorappbar';
import PrescricoesMainAppBar from '../../pages/prescricoes/components/appbar/mainappbar';

const ThirdAppBar = () => {

   const { page } = useContext(AtendimentoContext)

   const GetAppBar = () => {

      switch (page) {
         case 'prescricoesmain':
            return <PrescricoesMainAppBar />
         case 'prescricaoinsert':
            return <EditorAppBar />
         //return <PrescricaoInsert />
         //   case 'prescricaoupdate':
         //       return <PrescricaoUpdate />
         //   case 'prescricaodelete':
         //       return <PrescricaoDelete />
         // case 'lmes':
         //     return <LMEMain />
         // case 'lmeinsert':
         //     return <LMEInsert />
         // case 'lmeupdate':
         //     return <LMEUpdate />
         // case 'lmedelete':
         //     return <LMEDelete />
         // case 'print':
         //     return <Print />
         case 'teste':
            return <div>Teste</div>
         default:
            return <div />
      }
   }
   return (
      <>
         <GetAppBar />
         {page && <Divider />}
      </>
   )

}

export default ThirdAppBar