import React, { useState } from "react";

const CreatePost = ({ createPost }) => {
  let [textOfThePost, setTextOfThePost] = useState("");

  const onChange = (e) => setTextOfThePost(e.target.value);

  const submitData = () => {
    if (textOfThePost !== "" && textOfThePost !== null) {
      createPost(textOfThePost);
    } else {
      alert("Text is empty!");
    }
    setTextOfThePost("");
  };
  return (
    <div className="tips-wrapper">
      <p className="font__p p__size font__bold app_color_font">
        <i className="fas fa-check-circle small_margin_right"></i>
        Tips For Posting
      </p>

      <ul className="tips">

        <li className="tip-item">
          <p className="font__p">
            <i className="fas fa-check small_margin_right"></i>
            Share Your Thoughs
          </p>
        </li>

        <li className="tip-item">
          <p className="font__p">
            <i className="fas fa-check small_margin_right"></i>
            Double-check grammar and spelling
          </p>
        </li>

        <li className="tip-item">
          <p className="font__p">
            <i className="fas fa-check small_margin_right"></i>
            Start To Share Your Thoughts
          </p>
        </li>
      </ul>

      <form>
        <textarea
          type="text"
          value={textOfThePost}
          onChange={(e) => onChange(e)}
        />
        <div
          onClick={() => submitData()}
          className="app_color_background add-post-button font__p font__bold"
        >
          Add post
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
