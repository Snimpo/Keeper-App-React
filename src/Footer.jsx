import "./App.css";

function Footer() {
  let date = new Date();

  return (
    //Decided to use the tag footer instead of a <p>
    <>
     <footer  class="page-footer">Copyright {date.getFullYear()}</footer>
    </>
  );
}

export default Footer;
