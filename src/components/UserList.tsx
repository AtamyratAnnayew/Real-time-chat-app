// import React, { useEffect, useState } from 'react';
// import "firebase/compat/firestore";
// import firebase from "firebase/compat/app";

// type User = {
//   uid: string;
//   displayName: string;
//   email: string;
//   photoUrl?: string;
// };

// type Props = {
//   currentUserUid: string;
//   onSelectUser: (user: User) => void;
//   db: firebase.firestore.Firestore;
// };

// const UserList: React.FC<Props> = ({ currentUserUid, onSelectUser, db }) => {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//   const unsubscribe = db.collection('users').onSnapshot((snapshot: firebase.firestore.QuerySnapshot) => {
//     const userList = snapshot.docs
//       .map((doc: firebase.firestore.QueryDocumentSnapshot) => doc.data() as User)
//       .filter((user: User) => user.uid !== currentUserUid);

//     setUsers(userList);
//   });

//   return unsubscribe;
// }, [currentUserUid, db]);


//   return (
//     <div className="p-4 border-r border-gray-200 w-full max-w-xs bg-white">
//       <h3 className="text-lg font-semibold mb-3">Select a User</h3>
//       <ul className="space-y-2">
//         {users.map((user) => (
//           <li
//             key={user.uid}
//             className="cursor-pointer flex items-center gap-3 p-2 rounded hover:bg-blue-100"
//             onClick={() => onSelectUser(user)}
//           >
//             {user.photoUrl && (
//               <img
//                 src={user.photoUrl}
//                 alt="Avatar"
//                 className="w-8 h-8 rounded-full object-cover"
//               />
//             )}
//             <span>{user.displayName}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
