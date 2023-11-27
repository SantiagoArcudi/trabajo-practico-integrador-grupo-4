import React from "react";
import '../styles/footer.css';
import { FaLinkedin } from "react-icons/fa6";

//Crea el footer
const Footer = () => {
    return (
        <footer>
            <span><FaLinkedin className="linkedin"/><a href="https://www.linkedin.com/in/santiago-arcudi/">Santiago Arcudi</a></span>
            <br />
            <span><FaLinkedin className="linkedin" /><a href="https://www.linkedin.com/in/constanzarodriguez-/">Constanza A. Rodriguez</a></span>
            <br />
            <span><FaLinkedin className="linkedin"/><a href="https://www.linkedin.com/in/cmrfranks?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bw3HfJ4bXT42iT%2BMEf5IVQA%3D%3D">Constanza Rodriguez</a></span>
            <br />
            <span><FaLinkedin className="linkedin"/><a href="https://www.linkedin.com/in/julieta-sofia-garnero-236871121/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">Sofia Garnero</a></span>
        </footer>
    )
}

export default Footer;
