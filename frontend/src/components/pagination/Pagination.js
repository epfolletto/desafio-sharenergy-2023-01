import * as s from './styled-Pagination';

export default function Paginacao(props) {

  const MAX_ITEMS = Math.min(5);
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const PRIMEIRO = Math.max(props.actualPage - MAX_LEFT, 1)

  return (
    <s.Pagination>
      <s.ButtonPrevious disabled={props.actualPage === 1 ? true : false} onClick={() => props.changeActualPage(props.actualPage - 1)}>Anterior</s.ButtonPrevious>
      {
        Array.from({ length: MAX_ITEMS }, (_, i) => {
          return (
            <s.ButtonPage 
              disabled={ (i+PRIMEIRO) > props.pages ? true : false} 
              actualPage={props.actualPage} value={i + PRIMEIRO} 
              onClick={() => props.changeActualPage(i + PRIMEIRO)} 
              key={i}>{i + PRIMEIRO}
            </s.ButtonPage>
          )
        })
      }
      <s.ButtonLast disabled={props.actualPage === props.pages ? true : false} onClick={() => props.changeActualPage(props.actualPage + 1)}>Próximo</s.ButtonLast>
    </s.Pagination>
  );
};