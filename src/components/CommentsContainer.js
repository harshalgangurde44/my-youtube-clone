import React from "react";

const commentsData = [
  {
    name: "Harshal ",
    text: "loriw sidji sjdnueei kkjgi",
    replies: [
      {
        name: "Harshal-66 ",
        text: "loriw sidji sjdnueei kkjgi",
        replies: [
          {
            name: "Harshal-00",
            text: "loriw sidji sjdnueei kkjgi",
            replies: [
              {
                name: "Harshal-677 ",
                text: "loriw sidji sjdnueei kkjgi",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1>Comments:</h1>
    </div>
  );
};

export default CommentsContainer;
