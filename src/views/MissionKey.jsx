import React from "react";

export default function MissionKey() {
  return (
    <div style={{ color: "white" }}>
      <p>
        <span className="px-3 mr-2 bg-success" /> = Success
      </p>
      <p>
        <span className="px-3 mr-2 bg-danger" /> = Fail
      </p>
    </div>
  );
}
