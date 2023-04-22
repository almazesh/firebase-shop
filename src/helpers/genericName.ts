
 
export default function genericName() {
  const names = ["Ruth","Jackson",
    "Debra","Allen",
    "Gerald","Harris",
    "Raymond","Carter",
    "Jacqueline","Torres",
    "Joseph","Nelson",
    "Carlos","Sanchez",
    "Ralph","Clark",
    "Jean","Alexander",
    "Stephen","Roberts",
    "Eric","Long",
    "Amanda","Scott",
    "Teresa","Diaz",
    "Wanda","Thomas"
  ];

  const symbols = [
    "/",
    "*",
    "&",
    "$",
    "%",
    "@",
    "#",
    "^",
    "(",
    ")"
  ]

   return names[Math.floor(Math.random() * names.length)]
    .concat(symbols[Math.floor(Math.random() * symbols.length)]);

};