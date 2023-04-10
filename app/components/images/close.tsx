interface Props {
   className?: string 
   onClick: () => void
}

export const Close = (props: Props) => (
<svg {...props} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <line x1="5" y1="5" x2="15" y2="15" stroke="black" stroke-width="2" />
  <line x1="15" y1="5" x2="5" y2="15" stroke="black" stroke-width="2" />
</svg>


)