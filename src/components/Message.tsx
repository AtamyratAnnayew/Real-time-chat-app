import React from "react";
import { formatRelative } from "date-fns";

type MessageProps = {
  // createdAt?: {
  //   seconds: number;
  // };
  // text: string;
  // displayName: string;
  // photoUrl?: string;
  createdAt?: { seconds: number };
  text: string;
  displayName: string;
  photoUrl?: string;
  uid: string;
  currentUid?: string;

};




const Message: React.FC<MessageProps> = ({
  createdAt,
  text,
  displayName,
  photoUrl,
  uid,
  currentUid,
}) => {
  const isCurrentUser = uid === currentUid;
  return (
    <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`flex items-start gap-3 mb-4 p-3 rounded-lg max-w-xs shadow-sm
        ${isCurrentUser ? 'bg-blue-100' : 'bg-white'}
      `}
    >
      {/* Only show avatar on left side */}
      {!isCurrentUser && photoUrl && (
        <img
          src={photoUrl}
          alt="Avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
      )}
      <div>
        {displayName && (
          <p className="text-sm font-semibold text-gray-700">{displayName}</p>
        )}
        {createdAt?.seconds && (
          <span className="text-xs text-gray-400 block">
            {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
          </span>
        )}
        <p className="text-sm text-gray-800 mt-1 break-words">{text}</p>
      </div>
    </div>
  </div>
  );
};

export default Message;
