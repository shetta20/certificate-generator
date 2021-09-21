import logo from './logo.svg';
import './App.css';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import logo2 from './Untitled.png'
import peer from './peer.png'
import signature from './Signature.png'


function App() {

  const printDocument = () => {
    const input = document.getElementById('divcontents');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF("l");
        pdf.addImage(imgData, 'JPEG',11,12);
        pdf.save("download.pdf");
      })
    ;
  }

  return (
    <div className="App">
      <div id="divcontents" className="certificate">
        <div className="inner1">
          <div className="logoHolder">
            <img src={logo2} height="10%" width="38%" style={{marginTop:'2%'}}/>  
          </div>
          <div style={{display:'flex',height:'60%',marginLeft:'8%',marginRight:'8%'}}>
            <img src={peer} style={{opacity:'0.31',width:'25%'}}/>
            <div style={{display:'flex',flexDirection:'column',width:'50%',marginTop:'2%'}}>
              <div>
              <h1 className="font-link" style={{display:'flex',justifyContent:'center',height:'auto',color:'#05438E',fontSize:'300%',marginBottom:'5%'}}>JOHN WICK</h1>
              </div>
              <div>
              has been awarded with the
              </div>
              <div className="font-link-1">
              Don't F the Customer
              </div>
              <div style={{marginTop:'2%',fontSize:'80%'}}>
              For the Quarter Q2 2021
              </div>
              <div className="font-link-1" style={{fontSize:'150%',marginTop:'20%',color:'black'}}>
              Certified by
              </div>
            </div>
          </div>
          <div style={{display:'flex',marginLeft:'8%',marginRight:'8%',height:'20%'}}>
            <div style={{display:'flex',width:'50%',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <img src={signature} style={{height:'55%',width:'45%'}}/>
              <div className="font-link-1" style={{fontSize:'100%',color:'black',margin:'0%'}}>
                Jon Livingston
              </div>
              <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%'}}>
                Senior Manager, Cloud Growth
              </div>
              <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%',fontWeight:'null'}}>
                Atlassian
              </div>
            </div>
            <div style={{display:'flex',width:'50%',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <img src={signature} style={{height:'55%',width:'45%'}}/>
              <div className="font-link-1" style={{fontSize:'100%',color:'black',margin:'0%'}}>
                Jon Livingston
              </div>
              <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%'}}>
                Senior Manager, Cloud Growth
              </div>
              <div className="font-link-1" style={{fontSize:'100%',color:'black',marginTop:'0%',fontWeight:'null'}}>
                Atlassian
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
