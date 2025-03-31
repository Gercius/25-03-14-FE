import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1 className="text-center">Puslapis Nerastas</h1>
            <button className="btn btn-secondary d-block mx-auto " onClick={() => navigate("/")}>
                Grįžti atgal
            </button>
        </>
    );
};

export default ErrorPage;
