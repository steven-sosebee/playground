import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useQuery, useMutation } from "@apollo/client";
import Logo from "../../images/logo.svg";
import Logo2 from "../../images/logo2.svg";
import "./home.css";
export const HomePage = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div id="intro">
      <div className={`${theme} list-plain`} id="technologies">
        <ul>
          <li>Javascript</li>
          <li>CSS</li>
          <li>React</li>
        </ul>{" "}
      </div>
      <div id="about-me">
        <div className={`primary-txt ${theme}`}>
          <h1>Steven Sosebee</h1>
          <p> Full Stack Web Developer</p>
          {/* <img
          height="400px"
          alt="portait"
          src="https://lh3.googleusercontent.com/Nn09ktmfh3FbC2l7RnpE4So4hyPgq5buA1WC_DB6IhuY28T50z8mAh-LemQJ8RYQJipgzNsKjrZ0rB4LNGvVpb7-fimWqQNZgFMsqaXxLMR2_wXafr3DgioKu_qdCu4S_lCoVwqUYjflWZs_GU8-SSU3Lw5WcsUZQJgEQCLU5deMy4M6phze1W3FIbQppWOUAWSJp7nnIenvD3d-Lv5NStcxlFPjp3x0y6w-UXE-b9X-_aCC6UXXJuCeF_stHEdeHhhYnOmu1Tx9FPgk5xu3KhsTpaY5LLazc2vYHs7dRmr3zuEXz-dt-SMVt26ycHj1hG-QujNTdACgkPBBpy3rS9ueTeNsY9Sg48GVi1CLeJTibA9qHxbfL5et2KDuEv4COv1xeScEz9zUkG5R1X0lYLguJAJjxSM-Fat6OzEwlfRAdUp81mHjco30OAEnSKFcr1HjygoBBSyZrVpMotmqokh9oHjBuF6mM_UBsbUa-0ZpxrVKGhBkymfwbcAd5QoXQHSiRWlSGY5Voypy1CDY7vA1dUHgSZDh86ycx-9qM5BZpu89aCJJL0O5YUyn6Iek9ZEGXhl0CgLf9cmhUbXg0fkGb0-586zpNDZMO6t5Pvu3UDncq4_a9ERmOopm04D4fSBUOHeTJZUMGtg9x1mD6VUVw1qTqzYUrpwcQ10iO4usu2shaUpjCEEk4iw5SUV7FALr8iJtQCGTNGpGrNIcSTkHk2hUqJMRlDcRrZaSpattDkVDssoyWUerVcCoOg=w390-h692-no?authuser=0"
        ></img> */}
          {/* <img
          height="400px"
          alt="portrait"
          src="https://lh3.googleusercontent.com/MbjHYAuBE4MrY6CG5FzhD_QsET2r6GBXKlbDoCj-jJBZ8gb0wzlXBfDxDHTpEYDuklaW1sAZex6f99VdZPNHogTScpFzg_R4ZdGFYncYInsa6oys0JJXruWAO1irAhEEiSqiXeilV5Y_2WBVbvj4CIYnfz6JYe6AfVP_Kl9lDc4MKHU_jespdJ4wtI8di6zo7fGpunRFLNtZsr1xiepI8rAhxhG9Di3WuhD8eTgBwMMUgkYMkU3Paj0Z1fG4yMRUMU7dO9s78K_XHyhcZ6XpQSW69PR-OEDCoVjO0M2Ol1JG9cZG0gbfik9ElCkrepz7bVqGnDc36EWygtyKOkKg1CeG-YL9zs3Z4CyMNeyZS3ik5m6FecsKNQa0EeyJO6OMo8wtaiuYJOw8xHUqivDurcfgKJHT_yxl9CzLbiSHlDx9Ha_VJHBtWYiIiw6PUf1wHDaPLzMmjTjc9TOrYjeGQtn0lqInBylg6hhDUQcqjAmGJ6RyQctEZjtk18gYk2NtAM-nNNfeY843beEWSJ5uzzrH0gIKdvUS6wHSHSBI3Ci7Bb4XYfCHK5kMN2yqDxD9Q4cGP_SRo85UffAS3gtChB2VuBT7qeVoFobhbSQDw2Wyp_QbUQOC8NiOFAMqxM0kOtclYggf6Nx_gQXAWOO-ADKaSbQJlv-3c4A7xVQgBT4S-X9Sff3YXhw4WO00kyz4bO8w1gybJDPfMLni909Dv1eCm21dNdl1VTub0_x_Cx8SnLzrTCAcxpmC_nHU2Q=w1231-h692-no?authuser=0"
        ></img>
        <img src="https://lh3.googleusercontent.com/MfLAI27FeuVbOiGFK0sCz4BfcFD_oXMndj1VQc9x2fVaL90sORsNM9U2qBouF6-V_x7X8sxDV_oNWEz2UkRpSZKHKMz52HRMfkhaNoiRxdLD8SakPAe1XcsMIcrPDUIzrFiEjrCoS-1av43VVCIF7NaGErnApq7eSU3Szhf--E8HYNCxS4e8RHs5n7StyKXzdvKVroOmUGiKFQEW9MwckYtEy26YS8BUdsjj1ensBllaXuGmNa64Ur2lfkOmztiWw-RJGbckkON4PEqgkMiV9RBlYsJDxjiO8XIh-FznmeXj2DOhlwmbfBtkW7dSQmF1sCV-hR8SGjUlMoseevZpfRrC37etH4UdFAErdAo4g1Ytho8iCFoheWlv0_kZLwv-W-ck3W7TNOt2ijXhUssb4uP0S1qdM3Cnx_Hch9lLumnHYYmOHDQnSI6IGPZykswnk7JsEj2Ev3QcZIQZXUZ7CNtJ_rRhQn9FMbUlUtXzWBOCaklhR1prBzXfwjIizPl0JbRnQZCb69fPcuGY63qsRAUkgnlBKWIGZfCPmgTs2d7B7pDzVlH8uwGhfmd5Icio0DM2WVlWbdHzgqEoBBH6Pfmi06M4My1ANIdsbatIScehQ__D8_hqe_wZ9z4UfLJnUEYWHactgcTs1G9k_Zc2fc-27DomOOt9Sd4NZu5Rn5xoUwtyIiHa_Jfnsb4Rjsu3Jv_MdIRw_BonO-b15cLPDBrcRConQxByLZ6gFR_kwshf2dtja6HTRtXHrlp06A=w423-h749-no?authuser=0"></img>
        <img src="https://lh3.googleusercontent.com/PWpTr934wEjwUsQ04PpiPDCCXRQa836ehPpwf2hrbuAwWLLhfvCzrWPBhCLesXzzzemUVJUKfw7dR8gz4cU2OgSR3AgLtk14QvfHpO8morUOn6aVVMarF0xNCWsOGagNfHlvpwwkbwdrMQDRleNqGO5QLgChtwM8OPpJX4lT3dvdgOb2s8ly6QHuAAQltuhC22ktjqtf_04sOv_X-k6Up1KwVu7f61xKFRMtQUI1O52sFJghvXSjIctetZD8DjAeg4G_Kct9bS629_uHc_z4k6Z6arNdRyAcum5ZszUyGlZHP-EAMM7Q0lVpizrWRFVIo6IK0uvCtMy1pk62GaXt2Pvnkhqu7MEHIpQlfLrkd6Sb7LkQ_hMQ8RbwZ0pmojyjbAYI9w5EXXwD7nCOcIIQxVeWK0-2b7XoHpKiAdDoLdgOOv1x9dZqx7ub3ze1-0a0ERXhiiUTAnAxxu-RZmTdve2s-WJErQ1G7Hoo92OFqZp4ySF742mJT_qNl-VMC2wIpw-YyPsPL_UR-dC4MsNR_s-SB2v36JkLel9p0KaJxYPvXEg_Yekv-qv9ztJa54AF_3wnMavry3h08AWC-EYB46owurF0aWx0gWs3OcEw7fYO_dEQD5oQvxasPkcMkeL6H6XyR43Stnw5O6Cv_ZztO82nrEwiAsvztqAcRqpEQe6guF_2VZREic7lTaQWYvkQPQVNFHQOY20ZIBkS5xucD0jtlWcGvdgvEssbo2okBhCaYp5mugJYIfFrw8R-_g=w422-h749-no?authuser=0"></img> */}
          <div id="hero">
            <img
              height="400px"
              src="https://lh3.googleusercontent.com/MPGJL5il93SaIa0pP5df5pbPofWBuUNQ1rztJAiEJ_eOBcQShZ91_RQ0mgOcqeP5PBaOxTZpVBDSvjPRAfRHyLyFF1kMYQro60dajoRhkJxrkRCuLz3NeLF2VEVlToyrqCQLGzG2AAg_-AGW0xjAlD3D4OzOoYUF8146wSsj0_9H7ET04i9VdGUAGh18VrPqwLBaQYet2JW2YcM5_tziBv9xDPXV3wMqBqvLtTmX48xTYuTxLmYtAQq2usbjCSMso_aR-xpY6xf5BXWqiulMRvYLoQNyyGH2ZiqhBBhR8Dfo-DbAHFk99WA3F7uRJywSCLP4Vp3DS5N-cWH9-WutJ_qjLJLq8IXLMEcCMjZjpESFCn_J3GBKNYOwmbXHtcrF0NIMnRXqShUzLiZblct1u0Jm0R4PMl23UfiYjqY86yvpInIBo0O6Buzm4KWPLRSbWLNOU3U-T2hC9FgY9Mz1lhEFp7nwj8bxMWo3q92xI5GwrwuqE0Rk1O2WEXq48udv-U0U83c7TXP46C2HtGUAgDMc5ToC4fCfSFFxqsr_Rt7Ockw65wENYW77t-GrN4y1SuFipoL9d-7m8LDjjj7JUNGb79Y0MnIve76N-4e4uQaXzf6nGqi8__TVMxC1he0ZCmVnPIOMpHn8xUvR5wDBiBLGNMCvNorQhdhw9fJzoWArM1MRQKkYLjSI7vMr3PLYyqXNspWuJaegSpRn0pkM75MMKrngGnQJRmbNFwbCoZOarz35C32VY7cTzuhrrw=w562-h749-no?authuser=0"
            ></img>
            <img id="logo1" height="50px" src={Logo}></img>
            <img id="logo2" height="50px" src={Logo2}></img>
            {/* <div>{Logo}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
