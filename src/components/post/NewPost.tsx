import Editor from "../templates/Editor";

function NewPost() {
  return (
    <div className="flex flex-col gap-3 w-[43.75rem] mx-3">
      <div className="flex justify-between">
        <button className="p-2 px-3 rounded-xl bg-[#DADDFB] text-[#5561E3] uppercase">create new article</button>
        <img className="cursor-pointer" src={process.env.PUBLIC_URL + "/img/icon/Option.png"} alt="Option" />
      </div>
      <div className="flex bg-white rounded-xl p-2 py-3">
        <div className="p-2 py-1 bg-[#B7BDFF] text-[#404040] rounded-xl mx-1 flex items-center">
          <span>programming</span>
          <img src={process.env.PUBLIC_URL + "/img/icon/Close.png"} alt="close" />
        </div>
        <input className="focus:outline-none" type="text" placeholder="add up to 5 tags..." />
      </div>
      <Editor />
      <div className="flex gap-5 items-center self-end mt-5">
        <p className="uppercase cursor-pointer">save as draft</p>
        <button className="p-2 rounded-xl bg-[#3B49DF] text-white uppercase">submit</button>
      </div>
    </div>
  );
}

export default NewPost;
