import { Textcontent } from "./Text-content";

export function Row3content(){
    return (
        <>
         <div className="row content">
            <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
              <img style={{height:300}} src="src/assets/img/features-3.png" className="img-fluid" alt="" />
            </div>
    
    <Textcontent/>
          </div>
        </>
    )
}