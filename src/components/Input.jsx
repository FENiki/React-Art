export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400"; // space is very important to add a new class before the classname
    inputClasses += " text-red-500 bg-red-100 border-red-100";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }
 
  return (
    // type prop & onchange prop forwarded to that Input element. 
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
