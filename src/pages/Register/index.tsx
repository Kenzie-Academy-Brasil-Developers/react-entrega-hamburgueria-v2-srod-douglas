import { FormRegister } from '../../components/Forms/FormRegister'
import brandDark from '../../assets/images/BRANDDARK.png'
import { StyledMainRegisterPage } from './styles'
import brandCrop from '../../assets/images/brandCodeLogoCrop-removebg.png'

export const RegisterPage = () => {
  return (
    <>
      <StyledMainRegisterPage className="animate__animated animate__slideInLeft animate__slower">
        <section className="animate__animated animate__fadeInLeft animate__slower">
                <img src={brandDark} />
                <img src={brandCrop} />
            </section>
        <section>
          <FormRegister/>
        </section>
      </StyledMainRegisterPage>
    </>
  )
}