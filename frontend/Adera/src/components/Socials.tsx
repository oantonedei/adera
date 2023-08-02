
function Socials() {
  return (
    <div className="flex flex-col h-screen bg-center bg-cover bg-no-repeat pt-5">
      <div className="grid place-items-center mx-auto p-20 sm:my-auto bg-white rounded-3xl space-y-10">
        <h1 className="text-5xl font-semibold text-blue-500 pb-2">
          Follow Us:
        </h1>
        <ul>
          <li>
            <a
              href="https://instagram.com/adera.us?igshid=MzRlODBiNWFlZA=="
              target="_blank"
            >
              <span className="fa-brands fa-instagram"></span>
            </a>
          </li>
          {/* <li>
            <a href="#">
              <span className="fa-brands fa-whatsapp"></span>
            </a>
          </li> */}
          <li>
            <a href="https://twitter.com/adera_co?s=21&t=UTp7nNO5_Op2KrIV3eAcKA" target="_blank">
              <span className="fa-brands fa-twitter"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Socials;
