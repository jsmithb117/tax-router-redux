interface IAnim {
  [key: string]: number;
  in: number;
  out: number;
}
const anim: IAnim = {
  in: 10,
  out: 500,
}

export default anim;
