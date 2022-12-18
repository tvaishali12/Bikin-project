
import {Servicetitle} from "./Service-title"
import {Servicecard} from "./Service-cardtcontent"
export function Servicesection(){
    return(
        <>
          <section id="services" class="services">
        <div class="containers" data-aos="fade-up">
  <Servicetitle/>

     <Servicecard/>
     <Servicecard/>
     <Servicecard/>
     <Servicecard/>
            </div>
            </section>

        </>
    )
}