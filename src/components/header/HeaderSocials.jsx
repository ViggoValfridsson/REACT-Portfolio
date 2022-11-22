import {AiOutlineLinkedin} from "react-icons/ai"
import {SlSocialGithub} from "react-icons/sl"
import {BsFacebook} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiOutlineLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><SlSocialGithub/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials