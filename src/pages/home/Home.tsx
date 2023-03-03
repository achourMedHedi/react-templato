import { useSelector } from "react-redux";
import { useTranslations } from "use-intl";
import Testing from "../../components/Testing";
import { testActionAsync } from "../../redux/example/asyncActions";
import { selectValue } from "../../redux/example/selectors";
import { useDispatch } from "../../redux/store";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const props = useLoaderData()
  console.log("props:2222222 ", props);
  const t = useTranslations("App");
  const value = useSelector(selectValue);
  const dispatch = useDispatch();
  return (
    <div className="">
      <div>
        <button onClick={() => dispatch(testActionAsync(2))}>Add</button>{" "}
      </div>
      ;
      <Testing title="title" type="prim" />
    </div>
  );
};

export default HomePage;
