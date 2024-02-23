import FormAuth from "../../components/formRow/FormAuth";
import AuthWrapper from "../../components/wrapper/AuthWrapper";
import TitleText from "../../components/text/TitleText";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ILoginRequest } from "../../types";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { getLastLocation, deleteLastLocation } from "../../utils/localStorage";

const Login = () => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: ILoginRequest) => {
    if (values.email === "" || values.password === "") {
      return toast.error("Email atau Password tidak boleh kosong");
    } else {
      const user = await loginUser(values).unwrap();
      dispatch(setUser(user));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully");

      const lastLocation = getLastLocation();
      if (lastLocation) {
        navigate(lastLocation);
      } else {
        navigate("/note");
      }
      deleteLastLocation();
    } else if (isError) {
      toast.error("Invalid credentials");
    }
  }, [isLoading]);

  return (
    <AuthWrapper>
      <TitleText text={"MASUK"} />
      <FormAuth
        initialState={{ email: "", password: "" }}
        pageType="login"
        onSubmit={handleSubmit}
      />
    </AuthWrapper>
  );
};

export default Login;
