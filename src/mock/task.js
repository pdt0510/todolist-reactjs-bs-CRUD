const { v4: uuidv4 } = require("uuid");

let tasks = [
  {
    id: uuidv4(),
    name: "GHJ Lorem ipsum dolor, '111' consectetur 'high' adipisicing elit.", //12ss
    level: 0,
  },
  {
    id: uuidv4(),
    name: "ABC Lorem ipsum dolor, '000' amet consectetur 'small' adipisicing elit.",
    level: 1,
  },
  {
    id: uuidv4(),
    name: "NKL Lorem ipsum dolor, '222' amet consectetur  'medium'adipisicing elit.",
    level: 0,
  },
  {
    id: uuidv4(),
    name: "XYZ  123 Lorem ipsum dolor, '111' amet consectetur 'medium' adipisicing elit.",
    level: 2,
  },
  {
    id: uuidv4(),
    name: "SEF Lorem ipsum dolor, 'high' amet consectetur adipisicing elit.",
    level: 1,
  },
  {
    id: uuidv4(),
    name: "KLM Lorem ipsum dolor, 'small' amet consectetur adipisicing elit.",
    level: 2,
  },
];

export default tasks;
