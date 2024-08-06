import { Outlet, useLoaderData } from "react-router-dom";
import SubNavBar from "../../components/subNavBar";
import SubFooter from "../../components/subFooter";

const Preview = () => {
  const user = useLoaderData();
  console.log("Data: ", user);
  return (
    <>
      <SubNavBar
        firstName={user.firstName}
        lastName={user.lastName}
        userName={user.userName}
      />
      <Outlet context={user ?? []} />
      <SubFooter user={user} />
    </>
  );
};

export default Preview;
