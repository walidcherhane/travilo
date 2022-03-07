import React from "react";

export default function Statistics({state, title, description}) {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-4">

          <div className="text-2xl font-semibold text-primary-100 text-start relative z-10">{state}</div>
        <div className="font-bold text-xl capitalize ">{title}</div>
        <div className="leading-relaxed font-light capitalize">{description}</div>
      </div>
    </>
  );
}
