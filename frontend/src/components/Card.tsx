import DeleteIcon from "../icons/DeleteIcon";
import Notebook from "../icons/Notebook";
import ShareIcon from "../icons/ShareIcon";
interface cardTypes {
  title: string;
  link: string;
  type: "youtube" | "twitter";
}
const Card = ({ title, link, type }: cardTypes) => {
  return (
    <div>
      <div className="text-black text-lg font-normal  bg-white shadow-lg rounded-md max-w-72 flex items-center flex-col pt-4 border">
        <div className="flex items-center justify-around p-2 w-full cursor-pointer">
          <div>
            <Notebook />
          </div>
          <div>{title}</div>
          <div className="flex items-center justify-center">
            <a href={link} target="_blank">
              <ShareIcon />
            </a>

            <DeleteIcon />
          </div>
        </div>
        <div className="p-4">
          {type === "youtube" && (
            <div className="w-full p-4">
            <iframe
            width={250}
              src={link.replace("youtu.be/","www.youtube.com/embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe> </div>
          )}
          {type === "twitter" && (
            <blockquote className="twitter-tweet w-[250px]">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
