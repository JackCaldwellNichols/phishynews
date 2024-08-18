import "./footer.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const notify = () =>
    toast("Thank you for subscribing!", {
      position: "top-right",
      autoClose: 3000,
      type: "success",
      theme: "light",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let fData = new FormData();
    fData.append("name", uname);
    fData.append("email", email);
    try {
      await fetch("http://localhost:8080/deusto/api/server.php", {
        method: "post",
        body: fData,
      });
    } catch (error) {
      console.error(error);
    }
    setUname("");
    setEmail("");
    notify();
  };

  return (
    <div className="footer">
      <div className="left">
        <h1 className="footer_title">PhishyNews</h1>
        <form
          className="modal_content"
          onSubmit={(e) => handleSubmit(e)}
          method="POST"
        >
          <h1 className="title">Subscribe</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUname(e.target.value)}
            value={uname}
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
            required
          />
          <div className="modal_btns">
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <div className="right">
        <div className="cats">
          <span className="cat">Business</span>
          <span className="cat">Sports</span>
          <span className="cat">Music</span>
          <span className="cat">Fashion</span>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
