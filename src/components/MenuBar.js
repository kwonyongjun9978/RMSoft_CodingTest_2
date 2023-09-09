import { AiOutlineHome, AiOutlineFolder } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaHammer } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="Menubar">
      <div className="backgrondMenu">
        <AiOutlineHome
          className="icon"
          id="home"
          data-tooltip-content="Home"
          onClick={() => {
            navigate("/");
          }}
        />
        <AiOutlineFolder
          className="icon"
          id="project"
          data-tooltip-content="Project"
          onClick={() => {
            navigate("/project");
          }}
        />
        <FaHammer
          className="icon"
          id="stacks"
          data-tooltip-content="Stacks"
          onClick={() => {
            navigate("/stacks");
          }}
        />
        <BsBookmarkCheck
          className="icon"
          id="task"
          data-tooltip-content="Task"
          onClick={() => {
            navigate("/task");
          }}
        />
        <ReactTooltip anchorId="home" />
        <ReactTooltip anchorId="project" />
        <ReactTooltip anchorId="stacks" />
        <ReactTooltip anchorId="task" />
      </div>
    </div>
  );
};

export default MenuBar;