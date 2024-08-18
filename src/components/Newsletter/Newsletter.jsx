import "./newsletter.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [modal, setModal] = useState(false);
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const notify = () =>
    toast("Thank you for subscribing!", {
      position: "top-right",
      autoClose: 3000,
      type: "success",
      theme: "light",
    });

  const toggleModal = () => {
    setModal(!modal);
  };

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
    toggleModal();
    notify();
  };

  return (
    <div className="news_letter">
      <div className="box">
        <div className="box_text">
          <h3>Want the latest content?</h3>
        </div>

        <button className="sign_up_btn" onClick={toggleModal}>
          Sign Up
        </button>
        {modal ? (
          <div className="modal">
            <div className="overlay">
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
                  <button onClick={toggleModal}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Newsletter;
