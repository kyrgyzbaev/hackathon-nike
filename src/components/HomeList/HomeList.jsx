import React from "react";
import { useNavigate } from "react-router-dom";

const HomeList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="img-1">
        <p className="p-h">
          Nike - American multinational company specializing in sportswear and
          footwear.
        </p>
        <img
          className="nike-img-1"
          width={"100%"}
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1584,c_limit/60475bc5-7b0a-457a-a456-000c081ec429/nike-just-do-it.jpg"
          alt="dsdsseweweww"
        />
      </div>
      <div className="home-img-2">
        <img
          className="nike-img-2"
          width={"100%"}
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1584,c_limit/6350b748-3af3-45e7-b408-ccca9f90c33c/jordan.jpg"
          alt=""
        />
        <div className="get-first">
          <p className="p-h-2">
            if you want to look stylish, buy nike sneakers
          </p>
        </div>
      </div>
      <div className="home-img-3">
        <img
          className="nike-img-3"
          width={"100%"}
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1584,c_limit/e008d072-848e-4f7f-8103-dfd697a1ce77/jordan.jpg"
          alt=""
        />
        <div className="just-it">
          <p className="p-h-3">just do it !</p>
        </div>
      </div>
      <div>
        <img
          className="home-img-1"
          width={"100%"}
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1584,c_limit/9503f105-38ed-4cfc-97e5-85bf8b06f368/nike-just-do-it.jpg"
          alt=""
        />
      </div>

      <div className="home-btn">
        <button onClick={() => navigate("/register")} className="register-h">
          Register
        </button>
        <button onClick={() => navigate("/login")} className="login-h">
          Login
        </button>
      </div>
    </div>
  );
};

export default HomeList;
