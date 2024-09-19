import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='257e4fe9-480a-4275-b011-02b4a5c3e75b'
        username={props?.user?.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;