export default function logo(props) {
  return (
    <section className="contact-logo" style={{ backgroundImage: "url('/matlab.jpg')" }}>
      <style>{`.contact-logo {
          justify-content: center;
          text-align: center;
          padding: 20px;
          min-height: 200px;
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }
           .txt-center {
             color: #fff;
             text-align: center;
             font-size: 45px;
             font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
             letter-spacing: 3px
             }`}</style>
      <h2 className="txt-center">Contact</h2>
    </section>
  );
}
