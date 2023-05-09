import React, { useRef } from "react";
import { setTrainerName } from "../../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import imgs1 from "../../assets/images/img_title.png";
import imgs2 from "../../assets/images/img_footer.png";
import "../Pokedex/styles/formNameUser.css";

const FormNameUser = () => {
    const inputName = useRef();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setTrainerName(inputName.current.value.trim()));
        navigate("/pokedex");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <header className="form__header">
                <img className="form__img" src={imgs1} alt="" />
            </header>

            <h2 className="form__title">¡Hi Trainer!</h2>
            <p className="form__parrafo">
                Please give us your trainer name to start.
            </p>
            <div>
                <input
                    className="form__input--name"
                    ref={inputName}
                    type="text"
                    placeholder="Tu nombre"
                />
                <button className="form__button">Start</button>
            </div>
            <footer className="home__footer">
                <div className="home__footer-1"></div>
                <div className="home__footer-2"></div>
                <img className="home__footer-img" src={imgs2} alt="" />
            </footer>
        </form>
    );
};

export default FormNameUser;
