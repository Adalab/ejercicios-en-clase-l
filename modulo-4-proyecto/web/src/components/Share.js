import React, { useState } from "react";
import Loading from "./Loading";

const Share = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const [twitter] = useState(
    encodeURIComponent(
      "He creado una tarjeta de visita gracias a las <!Surrender/>"
    )
  );
  const sendRequest = () => {
    props.sendRequest();
    setIsHidden(false);
  };

  return (
    <>
      <section className="gen-main__customize-share ">
        <button
          onClick={sendRequest}
          disabled={props.data.isClickable ? true : false}
          className={
            props.data.isClickable
              ? "customize-share__button  js-section js-createBtn js-cardCreated"
              : "customize-share__button  js-section js-createBtn"
          }
        >
          Crear tarjeta
        </button>
      </section>

      <section
        className={
          isHidden
            ? "gen-main__customize-share--hidden js__hiddenlink js-sectionHidden"
            : "gen-main__customize-share--hidden js-sectionHidden"
        }
      >
        {props.data.apiCardUrl ? (
          <>
            <p className="customize-share__text--hidden">
              La tarjeta ha sido creada:
            </p>

            <a
              className="js-twitter-url customize-share__web--hidden"
              href={props.data.apiCardUrl}
              title="card Link"
              target="_blank" rel="noreferrer"
            >
              {props.data.apiCardUrl}
            </a>
          </>
        ) : (
          <>
            {props.data.isLoading === true ? (
              <Loading />
            ) : (
              <>
                <h3 className="share__finish--title">Error:</h3>
                <p className="card-link">{props.data.apiError}</p>
              </>
            )}
          </>
        )}
        <a
          className="customize-share__twitter--hidden"
          href={`https://twitter.com/intent/tweet?text=${twitter}&url=${props.data.apiCardUrl}`}
        >
          Compartir en Twitter
        </a>
      </section>
    </>
  );
};

export default Share;
