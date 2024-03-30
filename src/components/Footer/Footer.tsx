import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'

export function Footer() {
  return (
    <Container className="footer">
      <p> I would like to thank <a href="https://vinayaksingh.in">Vinayak Singh </a>for the template</p>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
    </Container>
  )
}
