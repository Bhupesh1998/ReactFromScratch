const Footer = () => {
  return (
    <footer
      className="bg-amber-900 text-amber-200 p-5 
                       grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left"
    >
      <div>
        <h2 className="font-bold mb-2">Contact</h2>
        <p>contact us</p>
        <p>call whatsapp</p>
        <p>malibhupesh58@gmail.com</p>
      </div>

      <div>
        <h2 className="font-bold mb-2">Support</h2>
        <p>help</p>
        <p>privacy</p>
        <p>terms</p>
      </div>

      <div>
        <h2 className="font-bold mb-2">More</h2>
        <p>about</p>
        <p>services</p>
        <p>info</p>
      </div>
    </footer>
  );
};

export default Footer;
