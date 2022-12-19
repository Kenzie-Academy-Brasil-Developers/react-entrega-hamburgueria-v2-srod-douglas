import { FormRegister } from '../../components/Forms/FormRegister'
import brandWhite from '../../assets/images/BRANDWHITE.png'
import brandDark from '../../assets/images/BRANDDARK.png'
import { StyledMainRegisterPage } from './styles'
export const RegisterPage = () => {
  return (
    <>
      <StyledMainRegisterPage className="animate__animated animate__slideInLeft animate__slower">
        <section className="animate__animated animate__fadeInLeft animate__slower">
                <img src={brandDark} />
            </section>
        <section>
          <FormRegister/>
        </section>
      </StyledMainRegisterPage>
    </>
  )
}