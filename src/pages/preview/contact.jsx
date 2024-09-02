import ContactCard from "../../components/contactCard";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center gap-y-10 px-8 md:px-28 py-10">
      <div className="text-center md:text-left">
        <h1 className="font-bold antialiased text-[1.5rem] md:text-[2rem] pt-14">
          Contact
        </h1>
        <span className="text-[18px] md:text-[20px] antialiased">
          Looking forward to hearing from you
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
