import Content from "../../components/wrapper/Content";
import TitleText from "../../components/text/TitleText";
import RegularText from "../../components/text/RegularText";
import { useGetUserQuery } from "../../redux/api/userApi";

import { getUserFromLocalStorage } from "../../utils/localStorage";

const Information = () => {
  const localUser = getUserFromLocalStorage();
  const { data: user } = useGetUserQuery(localUser.user._id);

  return (
    <Content>
      <div className="p-1.5 w-full mb-6 bg-black">&nbsp;</div>
      <div className="px-4">
        <div className="flex flex-row gap-4">
          <TitleText text={"Email"} />
          <TitleText text={user?.email} />
        </div>
        <div className="flex flex-row gap-4">
          <RegularText text={"Username"} />
          <RegularText text={user?.username} />
        </div>
      </div>
    </Content>
  );
};

export default Information;
