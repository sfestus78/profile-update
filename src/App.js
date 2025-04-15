import { useState } from "react";

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Sam");
  const [lastName, setLastName] = useState("Festus");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        First name:{" "}
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{" "}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Whats good?, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
