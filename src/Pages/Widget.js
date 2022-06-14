import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberNewIcon from "@material-ui/icons/FiberNew";

import "./Widget.css";

function Widget() {
  //   const newsArticle = (_Heading, _subtitle) => {};
  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>Linkedin News</h2>
        <InfoIcon className="icon_info" />
      </div>
      <div className="widgets_article">
        <div className="widget_articles">
          <FiberNewIcon />
          <h4>This is News Heading</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis vel eveniet laudantium neque esse eaque?{" "}
          </p>
        </div>
      </div>
      <div className="widgets_article">
        <div className="widget_articles">
          <FiberNewIcon />
          <h4>This is News Heading</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis vel eveniet laudantium neque esse eaque?{" "}
          </p>
        </div>
      </div>
      <div className="widgets_article">
        <div className="widget_articles">
          <FiberNewIcon />
          <h4>This is News Heading</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis vel eveniet laudantium neque esse eaque?{" "}
          </p>
        </div>
      </div>
      <div className="widgets_article">
        <div className="widget_articles">
          <FiberNewIcon />
          <h4>This is News Heading</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis vel eveniet laudantium neque esse eaque?{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Widget;
