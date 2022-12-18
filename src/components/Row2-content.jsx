import { Textcontent } from "./Text-content";

export function Row2content(){
        return (
            <>
             <div className="row content">
                    
        <Textcontent/>
        <div className="col-md-5" data-aos="fade-right" data-aos-delay="100">
                  <img style={{height:300}} src="src/assets/img/features-2.png" className="img-fluid" alt="" />
                </div>
              </div>
            </>
        )
    }