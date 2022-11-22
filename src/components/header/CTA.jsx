import CV from "../../assets/cvTemp.pdf";
import { Link } from "react-router-dom";

const CTA = ({ updatePage }) => {
  return (
    <div className="cta">
      <a className="btn" href={CV}>
        My CV
      </a>
      <Link className="btn btn-primary" to="/contact" onClick={() => updatePage("contact")}>
        Contact
      </Link>
    </div>
  );
};

export default CTA;
