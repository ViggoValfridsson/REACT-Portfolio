import CV from "../../assets/cvTemp.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a className="btn" href={CV}>My CV</a>
        <a className="btn btn-primary" href="#contact">Contact</a>
    </div>
    )
}

export default CTA