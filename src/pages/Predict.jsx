import React from 'react';
import './Predict.css';

function Predict() {
  return (
    <div className="main">
      <div className="welcome-box">
        <h1 className="welcome">Predict The Risk of Organ Rejection in Kidney Transplant Recipients</h1>
        <h2 className="welcome">Please Enter The Donor and Recipient HLA Alleles in a 2-Field Format</h2>
      </div>

      <div className="ppl">
        <div style={{ width: '50%' }}>
          <h3 className="ppl-name">Recipient</h3>
          <hr color="black" width="80%" />
        </div>

        <div style={{ width: '50%' }}>
          <h3 className="ppl-name">Donor</h3>
          <hr color="black" width="80%" />
        </div>
      </div>

      <div class="hla-whole">
        <div class="hla-box">
          <div class="hla">
            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>A</p>
              <input type="text" class="allele" id="RA1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>A</p>
              <input type="text" class="allele" id="RA2" required />
            </div>

            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>B</p>
              <input type="text" class="allele" id="RB1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>B</p>
              <input type="text" class="allele" id="RB2" required />
            </div>

            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>C</p>
              <input type="text" class="allele" id="RC1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>C</p>
              <input type="text" class="allele" id="RC2" required />
            </div>
          </div>

          <div class="hla" style={{marginLeft: '2rem'}}>
            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB1</p>
              <input type="text" class="allele" id="RDRB1_1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB1</p>
              <input type="text" class="allele" id="RDRB1_2" required />
            </div>

            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB3</p>
              <input type="text" class="allele" id="RDRB3_1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB3</p>
              <input type="text" class="allele" id="RDRB3_2" required />
            </div>

            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPA1</p>
              <input type="text" class="allele" id="RDPA1_1"required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPA1</p>
              <input type="text" class="allele" id="RDPA1_2" required />
            </div>
          </div>

          <div class="hla" style={{marginLeft: '2rem'}}>
            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQB1</p>
              <input type="text" class="allele" id="RDQB1_1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQB1</p>
              <input type="text" class="allele" id="RDQB1_2" required />
            </div>

            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQA1</p>
              <input type="text" class="allele" id="RDQA1_1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQA1</p>
              <input type="text" class="allele" id="RDQA1_2" required />
            </div>

            <div class="a">
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPB1</p>
              <input type="text" class="allele" id="RDPB1_1" required />
            </div>
            <div class="a" style={{marginTop: '-2.5rem'}}>
              <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPB1</p>
              <input type="text" class="allele" id="RDPB1_2" required />
            </div>
          </div>
      </div>

      <div class="hla-box" style={{marginLeft: '5rem'}}>
        <div class="hla">
          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>A</p>
            <input type="text" class="allele" id="DA1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>A</p>
            <input type="text" class="allele" id="DA2" required />
          </div>

          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>B</p>
            <input type="text" class="allele" id="DB1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>B</p>
            <input type="text" class="allele" id="DB2" required />
          </div>

          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>C</p>
            <input type="text" class="allele" id="DC1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>C</p>
            <input type="text" class="allele" id="DC2" required />
          </div>
        </div>

        <div class="hla" style={{marginLeft: '2rem'}}>
          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB1</p>
            <input type="text" class="allele" id="DDRB1_1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB1</p>
            <input type="text" class="allele" id="DDRB1_2" required />
          </div>

          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB3</p>
            <input type="text" class="allele" id="DDRB3_1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DRB3</p>
            <input type="text" class="allele" id="DDRB3_2" required />
          </div>

          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPA1</p>
            <input type="text" class="allele" id="DDPA1_1"required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPA1</p>
            <input type="text" class="allele" id="DDPA1_2" required />
          </div>
        </div>

        <div class="hla" style={{marginLeft: '2rem'}}>
          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQB1</p>
            <input type="text" class="allele" id="DDQB1_1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQB1</p>
            <input type="text" class="allele" id="DDQB1_2" required />
          </div>

          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQA1</p>
            <input type="text" class="allele" id="DDQA1_1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DQA1</p>
            <input type="text" class="allele" id="DDQA1_2" required />
          </div>

          <div class="a">
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPB1</p>
            <input type="text" class="allele" id="DDPB1_1" required />
          </div>
          <div class="a" style={{marginTop: '-2.5rem'}}>
            <p style={{fontWeight: 'bold', fontSize: '20px'}}>DPB1</p>
            <input type="text" class="allele" id="DDPB1_2" required />
          </div>
        </div>
      </div>
      </div>
      
      <div className="button-box">
        <button className="button" onClick={() => {}}>Predict</button>
        <button className="button1" onClick={populateInputs}>Example NR</button>
        <button className="button1" onClick={populateInputs}>Example R</button>
        <button className="button" onClick={clearInputs}>Clear</button>
      </div>
    </div>
  );

  // Functions for populating and clearing inputs
  function clearInputs() {
    var inputs = document.querySelectorAll('input[type="text"]');
    
    inputs.forEach(function(input) {
      input.value = '';
    });
  }

  function populateInputs() {
    // Example answers
    var examplesR = ["01:01", "32:01", "08:01", "40:02", "02:02", "07:01", "11:01", "13:01", "02:01", "03:26", "01:03", "01:31", "03:01", "06:03", "01:03", "05:05", "04:01", "105:01" ];
    var examplesD = ["01:01", "68:01", "07:02", "35:03", "04:01", "07:02", "04:01", "11:04", "02:02", "02:38", "01:03", "02:22", "03:01", "03:02", "03:01", "05:05", "05:01", "05:01"];

    // Recipient
    document.getElementById('RA1').value = examplesR[0] || '';
    document.getElementById('RA2').value = examplesR[1] || '';
    document.getElementById('RB1').value = examplesR[2] || '';
    document.getElementById('RB2').value = examplesR[3] || '';
    document.getElementById('RC1').value = examplesR[4] || '';
    document.getElementById('RC2').value = examplesR[5] || '';

    document.getElementById('RDRB1_1').value = examplesR[6] || '';
    document.getElementById('RDRB1_2').value = examplesR[7] || '';
    document.getElementById('RDRB3_1').value = examplesR[8] || '';
    document.getElementById('RDRB3_2').value = examplesR[9] || '';
    document.getElementById('RDPA1_1').value = examplesR[10] || '';
    document.getElementById('RDPA1_2').value = examplesR[11] || '';

    document.getElementById('RDQB1_1').value = examplesR[12] || '';
    document.getElementById('RDQB1_2').value = examplesR[13] || '';
    document.getElementById('RDQA1_1').value = examplesR[14] || '';
    document.getElementById('RDQA1_2').value = examplesR[15] || '';
    document.getElementById('RDPB1_1').value = examplesR[16] || '';
    document.getElementById('RDPB1_2').value = examplesR[17] || '';

    // Donor
    document.getElementById('DA1').value = examplesD[0] || '';
    document.getElementById('DA2').value = examplesD[1] || '';
    document.getElementById('DB1').value = examplesD[2] || '';
    document.getElementById('DB2').value = examplesD[3] || '';
    document.getElementById('DC1').value = examplesD[4] || '';
    document.getElementById('DC2').value = examplesD[5] || '';

    document.getElementById('DDRB1_1').value = examplesD[6] || '';
    document.getElementById('DDRB1_2').value = examplesD[7] || '';
    document.getElementById('DDRB3_1').value = examplesD[8] || '';
    document.getElementById('DDRB3_2').value = examplesD[9] || '';
    document.getElementById('DDPA1_1').value = examplesD[10] || '';
    document.getElementById('DDPA1_2').value = examplesD[11] || '';

    document.getElementById('DDQB1_1').value = examplesD[12] || '';
    document.getElementById('DDQB1_2').value = examplesD[13] || '';
    document.getElementById('DDQA1_1').value = examplesD[14] || '';
    document.getElementById('DDQA1_2').value = examplesD[15] || '';
    document.getElementById('DDPB1_1').value = examplesD[16] || '';
    document.getElementById('DDPB1_2').value = examplesD[17] || '';
}
}

export default Predict;