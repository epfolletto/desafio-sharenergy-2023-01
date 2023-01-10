import React, { useState } from "react";
import * as s from './styled-CatsPage';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import useProtectedPage from '../../hooks/useProtectedPage';

export default function CatsPage() {
  useProtectedPage();

  const [status, setStatus] = useState(404);

  const updateStatus = (event) => {
    setStatus(Number(event.target.value));
    console.log(status)
  }

  return (
    <s.Grid>
      <s.LineHeader>
        <Header/>
      </s.LineHeader>

      <s.Main>
        <s.Box>
          <s.BoxSelect>

            <s.FieldsetInput>
              <s.Legend>Digite um status code:</s.Legend>
              <s.InputNumber
                type="number"
                onChange={updateStatus}
                value={status}
              />
            </s.FieldsetInput>

            <s.FieldsetInput>
                <s.Legend>Selecione um status code:</s.Legend>
                  <s.SelectStatus
                    value={status}
                    onChange={updateStatus}
                  >
                    <option value="100">100</option>
                    <option value="101">200</option>
                    <option value="102">102</option>
                    <option value="103">103</option>
                    <option value="200">200</option>
                    <option value="201">201</option>
                    <option value="202">202</option>
                    <option value="203">203</option>
                    <option value="204">204</option>
                    <option value="206">206</option>
                    <option value="207">207</option>
                    <option value="300">300</option>
                    <option value="301">301</option>
                    <option value="302">302</option>
                    <option value="303">303</option>
                    <option value="304">304</option>
                    <option value="305">305</option>
                    <option value="307">307</option>
                    <option value="308">308</option>
                    <option value="400">400</option>
                    <option value="401">401</option>
                    <option value="402">402</option>
                    <option value="403">403</option>
                    <option value="404">404</option>
                    <option value="405">405</option>
                    <option value="406">406</option>
                    <option value="407">407</option>
                    <option value="408">408</option>
                    <option value="409">409</option>
                    <option value="410">410</option>
                    <option value="411">411</option>
                    <option value="412">412</option>
                    <option value="413">413</option>
                    <option value="414">414</option>
                    <option value="415">415</option>
                    <option value="416">416</option>
                    <option value="417">417</option>
                    <option value="418">418</option>
                    <option value="420">420</option>
                    <option value="421">421</option>
                    <option value="422">422</option>
                    <option value="423">423</option>
                    <option value="424">424</option>
                    <option value="425">425</option>
                    <option value="426">426</option>
                    <option value="429">429</option>
                    <option value="431">431</option>
                    <option value="444">444</option>
                    <option value="450">450</option>
                    <option value="451">451</option>
                    <option value="497">497</option>
                    <option value="498">498</option>
                    <option value="499">499</option>
                    <option value="500">500</option>
                    <option value="501">501</option>
                    <option value="502">502</option>
                    <option value="503">503</option>
                    <option value="504">504</option>
                    <option value="506">506</option>
                    <option value="507">507</option>
                    <option value="508">508</option>
                    <option value="509">509</option>
                    <option value="510">510</option>
                    <option value="511">511</option>
                    <option value="521">521</option>
                    <option value="522">522</option>
                    <option value="523">523</option>
                    <option value="525">525</option>
                    <option value="599">599</option>
                  </s.SelectStatus>
              </s.FieldsetInput>
          </s.BoxSelect>

          <s.BoxCat>
            <s.Image src={`https://http.cat/${status}`} />
          </s.BoxCat>
        </s.Box>
      </s.Main>

      <s.LineFooter>
        <Footer />
      </s.LineFooter>
    </s.Grid>
  )
}