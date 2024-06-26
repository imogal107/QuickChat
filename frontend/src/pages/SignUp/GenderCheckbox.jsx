const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label cursor-pointer  ${selectedGender === "male" ? "selected" : ""} `} >
          <span className="label-text text-slate-400">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm border-slate-400 ml-2"
            checked= {selectedGender === "male"}
            onChange={()=>onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer  ${selectedGender === "female" ? "selected" : ""}  `}>
          <span className="label-text text-slate-400 ml-2">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-sm border-slate-400 ml-2"
            checked= {selectedGender === "female"}
            onChange={()=>onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

//STARTER CODE FOR THIS FILE

// const GenderCheckbox = () => {
//     return (
//       <div className="flex mt-2">
//           <div className="form-control">
//               <label className="label cursor-pointer">
//                   <span className="label-text text-slate-400">Male</span>
//                   <input type="checkbox"  className="checkbox checkbox-sm border-slate-400 ml-2" />
//               </label>
//           </div>
//           <div className="form-control">
//               <label className="label cursor-pointer">
//                   <span className="label-text text-slate-400 ml-2">Female</span>
//                   <input type="checkbox"  className="checkbox checkbox-sm border-slate-400 ml-2" />
//               </label>
//           </div>
//       </div>
//     )
//   }

//   export default GenderCheckbox
