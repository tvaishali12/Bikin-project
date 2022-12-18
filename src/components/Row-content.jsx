import { Textcontent } from "./Text-content";

export function Rowcontent(){
    return (
        <>
         <div className="row content">
            <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
              <img style={{height:300}} src="src/assets/img/features-1.png" className="img-fluid" alt="" />
            </div>
    
    <Textcontent/>
          </div>
        </>
    )
}