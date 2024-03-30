import { Container } from "./styles";
import phoneIcon from "../../assets/phone-icon.svg"

export function Contact(){
  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
      </header>
      <div className="contacts">
        <div>
        <a href="tel:+919589747804"><img src={phoneIcon} alt="Phone No." /></a>
          <a href="tel:+919589747804">(+91) 9589747804</a>
        </div>  
      </div>
    </Container>
  )
}