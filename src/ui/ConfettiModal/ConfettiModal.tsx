import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Button from "../Button/Button";
import classes from "./ConfettiModal.module.css";

interface ConfettiModalProps {
  handleCloseConfettiModal: () => void;
}
const ConfettiModal: React.FC<ConfettiModalProps> = ({
  handleCloseConfettiModal,
}) => {
  const { width, height } = useWindowSize();
  return (
    <>
      <div
        className={classes["backdrop"]}
        onClick={handleCloseConfettiModal}
      ></div>
      <div className={classes["modal-container"]}>
        <Confetti width={width} height={300} />
        <div className={classes["modal-content"]}>
          <span>🤩</span>
          <p>
            Thank you for joining our waitlist! We'll be in touch soon. In the
            meantime, we'd love it if you could share the word with a friend!
          </p>

          <Button
            className={classes["go-back"]}
            onClick={handleCloseConfettiModal}
          >
            Back to Homepage
          </Button>
        </div>
      </div>
    </>
  );
};

export default ConfettiModal;
