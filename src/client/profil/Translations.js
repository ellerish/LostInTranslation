import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { signsFetchingAction } from "../../store/signAction";
import SignsGrid from "../../store/SignsGrid";

function Translations() {
  const dispatch = useDispatch()


  useEffect(() => {
      dispatch( signsFetchingAction() )
  }, [ dispatch ])

  return (
      <div>
          <div>
              <SignsGrid />
          </div>
      </div>
  )
}
export default Translations