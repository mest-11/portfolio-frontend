import ContactCard from "../../components/contactCard";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center  gap-y-10  px-28 py-10 ">
      <div>
        {" "}
        <h1 className="font-bold antialiased text-[2rem] pt-14">Contact</h1>
        <span className="text-[20px] antialiased">
          Looking forward to hearing from you
        </span>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-col  ">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
